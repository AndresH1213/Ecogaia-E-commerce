import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-window',
  templateUrl: './image-window.component.html',
  styleUrls: ['./image-window.component.css']
})
export class imageWindowComponent implements OnInit {

  @Input() product!: string 
  constructor() { }

  ngOnInit(): void {
  }

}
