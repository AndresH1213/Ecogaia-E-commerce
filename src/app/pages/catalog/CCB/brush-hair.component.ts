import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brush-hair',
  templateUrl: './brush-hair.component.html',
  styleUrls: ['../catalog.component.css']
})
export class BrushHairComponent implements OnInit {

  public cant: number = 1;

  constructor() { }

  ngOnInit(): void {
  }
  changeValue(value: number) {
    this.cant  += value;
  }
  onChange(value: any ) {
    console.log(value)
  }

  addCart() {
    console.log(this.cant)
  }

}
