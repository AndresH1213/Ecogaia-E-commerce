import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../../services/helpers.service';

interface imgsPaths {
  name: string;
  path: string;
  productUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images : imgsPaths[] = [];
  constructor(private help: HelpersService) { 
  }
  

  ngOnInit(): void {

    this.images = [
      {
        name: 'cup',
        path: "assets/images/cup1.webp",
        productUrl: '/product/CMT'
      },
      {
        name: 'toothbrush',
        path: "assets/images/toothbrush.webp",
        productUrl: '/product/CDD'
      },
      {
        name: 'straw',
        path: "assets/images/straw2.webp",
        productUrl: '/product/PPG'
      },
      {
        name: 'hairbrush',
        path: "assets/images/hairbrush1.webp",
        productUrl: '/product/CCB'
      }
    ]
  }

}
