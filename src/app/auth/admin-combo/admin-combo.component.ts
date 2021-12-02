import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-admin-combo',
  templateUrl: './admin-combo.component.html',
  styles: [
  ]
})
export class AdminComboComponent implements OnInit {
  
  @Input() products: Product[] = []

  addCombo: Product | undefined;
  newCombo: Product[] = [];

  constructor() { }

  ngOnInit(): void {
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

}
