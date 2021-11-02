import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productImg = 'url(../../../assets/images/BRDM7234.JPG)'
  constructor() { }

  ngOnInit(): void {
  }

}
