import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { get } from 'scriptjs'
import { User } from '../models/User';

import { HelpersService } from '../services/helpers.service';
import { ShopService } from '../services/shop.service';
import { Cart } from '../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [`
    .input-cant-cart{
      width: 50px
    }
    .cart-img {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      margin: auto;
    }
    .remove_container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
  ]
})
export class CartComponent implements OnInit {

  public states: string[] = [];
  public cities = [];

  public cart!: Cart;

  public preferenceId: any;

  public user!: User;
  public userData = {
    email: 'email@generico',
    phoneNumber: 12398932,
    address: 'calle falsa 123'
  }

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

  constructor(private fb: FormBuilder,
              private helper: HelpersService,
              private shopService: ShopService) { }
  
  ngOnInit(): void {
    get("https://sdk.mercadopago.com/js/v2", () => {
      //library has been loaded...
      get("./assets/js/mercado-pago-btn.js",() => {
        console.log('btn')
      })
    });

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
    })
  }

  removeItem(item: number) {
    console.log(item)
  }

  getCart() {
    // this.cart = JSON.parse(localStorage.getItem('cart') || '')
  }

  saveClient() {
    const saveClientdata = {
      email: this.orderForm.get('email')?.value,
      cart: this.cart,
      order: 'orderID'
    }
    this.shopService.saveClient(saveClientdata).subscribe(console.log)
  }

  confirm() {
    const orderData = {
      userId: '',
      cart: [{
        product: {
          _id: 'cualquiera',
          name: 'producto1',
          price: 8000      
        },
        quantity: 3
      }],
      totalPrice: 1,
      clientAddress: {
        state: this.orderForm.get('state')?.value,
        city: this.orderForm.get('city')?.value,
        address: this.orderForm.get('address')?.value
      },
      phoneNumber: 120913092
    }

    const data = {
      order: orderData.cart,
      userData: this.userData
    }

    this.shopService.postOrder(data).subscribe((resp: any) => {
      if (resp.ok) {
       
      }
      this.preferenceId = resp.preferenceId
      console.log(this.preferenceId)
      localStorage.setItem('preferenceId', this.preferenceId)
    });    
  }

}
