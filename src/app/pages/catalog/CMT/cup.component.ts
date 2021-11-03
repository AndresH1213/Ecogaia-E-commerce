import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['../catalog.component.css']
})
export class CupComponent implements OnInit {

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
