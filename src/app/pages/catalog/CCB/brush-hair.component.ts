import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brush-hair',
  templateUrl: './brush-hair.component.html',
  styleUrls: ['../catalog.component.css']
})
export class BrushHairComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeValue(value: number) {
    console.log(value)
  }
  onChange(value: any ) {
    console.log(value)
  }

}
