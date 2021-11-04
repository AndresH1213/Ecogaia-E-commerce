import { Component, OnInit } from '@angular/core';

interface numProducts {
  code: string;
  cant: number;
}

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['../catalog.component.css']
})
export class CupComponent implements OnInit {

  public scrollIcon = true;

  scrolldown () {
    this.scrollIcon = false;
  }

  selected: numProducts = {
    cant: 1,
    code: 'CMT'
  }

  constructor() { }

  ngOnInit(): void {
    this.selected.cant = 1;
  }

  changeValue(value: number) {
    this.selected.cant += value;
    console.log(this.selected)
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

}
