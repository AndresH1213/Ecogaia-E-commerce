import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  @Input() product!: string 
  constructor() { }

  ngOnInit(): void {
  }

}
