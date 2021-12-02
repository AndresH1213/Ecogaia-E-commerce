import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../../../models/Product';
import { ShopService } from '../../../services/shop.service';
import { SelectedProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-add-cart-input',
  templateUrl: './add-cart-input.component.html',
  styleUrls: ['./add-cart-input.component.css']
})
export class AddCartInputComponent implements OnInit {

  @Input() product!: Product;

  rangeCantControl = new FormControl("", [Validators.max(20), Validators.min(1)])

  characteristicProperties: string[] = []

  public styleGridRows = ''

  public cant: number = 1;
  public selectedData: SelectedProduct = {
    product: this.product,
    cant: 1,
    characteristics: ''
  };
  public valuesProperties: any = {}

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    if (this.product.characteristics) {
      this.characteristicProperties = Object.keys(this.product.characteristics);
    }
    this.characteristicProperties.forEach(property => {
      this.valuesProperties[property] = ''
    });
    this.styleGridRows = `repeat(${this.characteristicProperties.length + 1}, 1fr)`;
    
    this.selectedData.product = this.product
  }

  changeValue(value: number) {
    if ((this.selectedData.cant + value) < 1 ) {
      return
    }
    this.selectedData.cant += value;
  }

  validCantValue(value: any) {
    if (!value || value < 0) {
      this.selectedData.cant = 1
    }
  }

  changeValueProp(key: any,value: string) {
    this.selectedData.characteristics = this.valuesProperties;
  }

  addCart() {
    this.shopService.addProductCart(this.selectedData)
  }

}
