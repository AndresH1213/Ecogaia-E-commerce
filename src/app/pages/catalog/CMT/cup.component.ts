import { Component, OnInit } from '@angular/core';
import { ProductPicked } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['../catalog.component.css']
})
export class CupComponent implements OnInit {

  public scrollIcon = true;
  public catalog: string[] = ['assets/images/cup.webp','assets/images/cup2.webp','assets/images/cup1.webp']
  public tallas!: [string, string];

  public selected: ProductPicked = {
    code: 'CMT',
    cant: 1,
    talla: ''
  };
  
  constructor() { }
  
  ngOnInit(): void {
    this.selected.cant = 1;
    // retrieve tallas?
    this.tallas = ['Talla 1', 'Talla 2']
  }
  
  changeValue(value: number) {
    this.selected.cant += value;
  }
  onChange(value: any ) {
    console.log(value)
  }
  
  changeNum(event: any) {
    console.log(event.target.value)
  }
  
  addCart() {
    console.log(this.selected)
  }

  scrolldown () {
    this.scrollIcon = false;
  }

}
