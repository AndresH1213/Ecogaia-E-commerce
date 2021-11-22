import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import Swal from 'sweetalert2';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProductID: string | undefined;
  selectedProduct: Product | undefined;

  addCombo: Product | undefined;
  newCombo: Product[] = [];

  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', [Validators.required,  Validators.min(1)]],
    imageUrl: ['', Validators.required],
    characteristic: [''],
    characteristicValue: ['']
  })

  public characteristic: any = {};
  public characteristicKeys: string[] = [];
  public showCharacteristics: boolean = false;

  constructor(private fb: FormBuilder,
              private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  
  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      console.log(products)
      this.products = products.map(({_id ,name, price, imageUrl, characteristics }) => {
        return new Product(_id, name, price, imageUrl, characteristics)
      })
    })
  }

  loadProductData(prodId: string) {
    // reset previuos product data
    this.characteristicKeys = [];
    this.characteristic = {};
    this.showCharacteristics = false;

    if (!prodId) {
      return this.productForm.reset();
    }
    this.productService.getSingleProduct(prodId!).subscribe((product) => {
      const { name, price, imageUrl, characteristics } = product;
      this.selectedProduct = product;
      let characteristicKey = ''
      let characteristicValue = [];
      // if the product has characteristcis load with the firs one the input form
      if (characteristics) {
        characteristicKey = Object.keys(characteristics!)[0];
        characteristicValue = characteristics[characteristicKey];
        if (!Array.isArray(characteristicValue)) {
          characteristicValue = [characteristicValue]
        } 
        this.characteristic = {
          [characteristicKey] : characteristicValue
        }
      }
      this.productForm.setValue({
        name, 
        price, 
        imageUrl: imageUrl![0], 
        characteristic: characteristicKey, 
        characteristicValue: characteristicValue
      });
    })
  }

  addCharacteristic() {
    if (!this.productForm.get('characteristic')?.value || !this.productForm.get('characteristicValue')?.value) {
      return 
    }
    this.showCharacteristics = true;
    const characteristicKey = this.productForm.get('characteristic')?.value;
    const characteristicValue = this.productForm.get('characteristicValue')?.value;
    // if characteristic >1 the values must be provided separate by comas
    let characteristicSet = characteristicValue;
    console.log(this.characteristic)
    if (typeof(characteristicValue) === typeof('string') ) {
      characteristicSet = characteristicValue.split(',')
    }
    this.characteristic = {
      ...this.characteristic,
      [characteristicKey]: characteristicSet
    };
    this.characteristicKeys = Object.keys(this.characteristic);
  }

  pushCombo() {
    if (!this.addCombo) {
      console.log('No hay producto');
      return 
    }
    this.newCombo.push(this.addCombo!);
  }

  removeCombo(prodId: string) {
    const indexProduct = this.newCombo.findIndex(product => product._id === prodId);
    this.newCombo.splice(indexProduct, 1);
  }

  edit() {
    const prodId = this.selectedProductID;
    console.log(prodId,'selected Product')
    const {name, price, imageUrl} = this.productForm.value;

    let data: any = {
      name, 
      price, 
      imageUrl
    }

    if (this.characteristic) {
      data.characteristics = {...this.characteristic};
    } else {
      data.characteristics = {}
    }

    this.productService.updateProduct(prodId!, data );
  }

  deleteProduct() {

    Swal.fire({
      title: 'Delete User?',
      text: `You are going to delete the product with name: ${this.selectedProduct?.name}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(this.selectedProductID!).subscribe((resp) => {
          Swal.fire(
            'Deleted!',
            `${resp.msg}`,
            'success'
          );
          this.loadProducts();
        });
      }
    });
  }

}
