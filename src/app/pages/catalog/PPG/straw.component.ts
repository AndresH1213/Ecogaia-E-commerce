import { Component, OnInit } from '@angular/core';
import { ProductPicked } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-pitillo',
  templateUrl: './straw.component.html',
  styleUrls: ['../catalog.component.css']
})
export class StrawComponent implements OnInit {

  public colors: string[] = [] 
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
    console.log(this.selected)
  }

}
