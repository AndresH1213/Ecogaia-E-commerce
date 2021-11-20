import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [
    `
    .cart-img {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      margin: auto;
    }
    `
  ]
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
