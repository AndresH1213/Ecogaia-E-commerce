import { Component, OnInit } from '@angular/core';
import { ProductPicked } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-pitillo',
  templateUrl: './straw.component.html',
  styleUrls: ['../catalog.component.css']
})
export class StrawComponent implements OnInit {

  public colors: string[] = [];
  public catalog: string[] = ['https://i.ibb.co/VjQTc8Z/combo1.webp','assets/images/straw2.webp','assets/images/straw1.webp']
  public cant: number = 1;
  public color: string = '';
  selected: ProductPicked = {
    code: 'PPG',
    cant: 1,
    color: ''
  }
  constructor() { }

  ngOnInit(): void {
    this.colors = ['blanco','negro','rojo','azul']
  }

  changeValue(value: number) {
    this.selected.cant += value;
    this.cant += value;
  }

  addCart() {
    console.log(this.cant, this.color)
  }

}
