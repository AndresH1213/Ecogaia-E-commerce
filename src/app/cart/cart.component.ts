import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { get } from 'scriptjs'
import { User } from '../models/User';

import { HelpersService } from '../services/helpers.service';
import { ShopService } from '../services/shop.service';
import { Cart } from '../interfaces/product.interface';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public states: string[] = [];
  public cities = [];

  public theresCart: boolean = false;
  public cart: Cart | undefined;
  public products: Product[] = [];
  public characteristicTags : string[] = [];


  public preferenceId: any;

  public user!: User;

  orderForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    phoneNumber: ['', [ Validators.required]],
    state: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required]
  })

  selectedState!: String;

  // UI loading box
  loading: boolean = false;
  buttonMecardoPagoLoaded: boolean = false;
  constructor(private fb: FormBuilder,
              private helper: HelpersService,
              private shopService: ShopService) { }
  
  ngOnInit(): void {
    if (!this.buttonMecardoPagoLoaded) {
      // lazyload of mercadopago libraries
      get("https://sdk.mercadopago.com/js/v2", () => {
        //library has been loaded...
        this.buttonMecardoPagoLoaded = true;
        get("./assets/js/mercado-pago-btn.js",() => {
          console.log('btn')
        })
      });
    }

    this.states = ['Amazonas','Antioquia','Arauca','Atlántico','Bolivar','Caldas','Caquetá','Casanare','Cauca','Cesar','Chocó',
    'Córdoba','Cundinamarca','Guainía','La Guajira','Guaviare','Huila','Magdalena','Meta','Norte de Santander','Nariño','Putumayo',
    'Quindío','Risaralda','San Andrés','Santander','Sucre','Tolima','Valle del Cauca','Vaupés','Vichada']

    this.orderForm.get('state')?.valueChanges.pipe(
      tap(() => {
        this.orderForm.get('city')?.reset('');
        this.loading = true;
      }),
      switchMap(state => this.helper.getCities(state))
    ).subscribe( (cities: any) => {
      this.cities = cities;
      this.loading = false;
    });

    this.theresCart = this.getCart();
    if (this.theresCart) {
      
      this.productsInstaces(this.cart!)
      
      this.cart?.products.forEach( product => {
        const values = Object.values(product.characteristics).join(', ');
        this.characteristicTags.push(values);
      })
    }; 
  }

  removeItem(index: number) {
    this.theresCart = this.shopService.deleteProductCart(index);
    
    // if empty cart reset the variables
    if (!this.theresCart) {
      this.cart = undefined;
      this.products = [];
      this.characteristicTags = [];
    }
    this.getCart();
    console.log(this.cart)
  }

  getCart() {
    this.cart = this.shopService.getCart;
    return this.cart ? true : false; 
  }

  productsInstaces(cart: Cart) {
    for (let i = 0; i < cart.products.length; i++ ) {
      const {_id, name, price, imageUrl, characteristics, code} = cart.products[i].item
      const productCart = new Product(_id,name,price,imageUrl,characteristics,code);
      this.products.push(productCart)
    }
  }

  saveClient() {
    const saveClientdata = {
      email: this.orderForm.get('email')?.value,
      cart: this.cart,
      order: 'orderID'
    }
    this.shopService.saveClient(saveClientdata).subscribe(console.log)
  }

  changeCantProduct(index: number, value: 1 | -1) {
    const findProduct = this.cart?.products[index];
    if (findProduct?.cant === 1 && value !== 1) {
      return
    }
    this.cart!.totalValue += value*findProduct!.item.price
    findProduct!.cant += value;
  }

  setOrderData() {
    
    const products = this.cart?.products.map(product => {
      let description = 'No description';
      if (product.characteristics) {
        description = Object.values(product.characteristics).join(', ')
      }
      return { productId: product.item._id, 
               quantity: product.cant,
               description }
    });
    const cartData = {
      products: products,
      totalValue: this.cart?.totalValue
    }
    const userData = {
      email: this.orderForm.get('email')?.value,
      phoneNumber: this.orderForm.get('phoneNumber')?.value,
      state: this.orderForm.get('state')?.value,
      city: this.orderForm.get('city')?.value,
      address: this.orderForm.get('address')?.value
    }
    return [cartData, userData]
  }

  confirm() {

    const [cartData, userData] = this.setOrderData();
    const orderData = {
      cartData,
      userData
    }

    this.shopService.postOrder(orderData).subscribe((resp: any) => {
      if (resp.ok) {
        console.log(this.preferenceId, 'success')
      }
      this.preferenceId = resp.preferenceId
      console.log(this.preferenceId)
      localStorage.setItem('preferenceId', this.preferenceId)
    });    
  }

}
