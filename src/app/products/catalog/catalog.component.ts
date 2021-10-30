import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  product = '../../../assets/images/BRDM7234.JPG'
  constructor() { }

  ngOnInit(): void {
  }

}
