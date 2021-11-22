import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-catalog',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // productImg = 'url(../../../assets/images/BRDM7234.JPG)';
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    // this.products = [
    //   {code:'CDD', imageUrl: ['./assets/images/toothbrush2.webp'], name:'Cepillo de dientes de bambú', price: 15000},
    //   {code:'PPG', imageUrl: ['./assets/images/straw1.webp'], name:'Pitillo plegable', price: 25000},
    //   {code:'CMT', imageUrl: ['./assets/images/cup2.webp'], name:'Copa menstrual', price: 60000},
    //   {code:'CCB', imageUrl: ['./assets/images/hairbrush1.webp'], name:'Cepillo de cabello de bambú', price: 20000},
    // ]
  }

}
