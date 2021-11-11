import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../../services/helpers.service';

interface imgsPaths {
  name: string;
  path: string;
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
        path: "assets/images/cup1.jpg"
      },
      {
        name: 'toothbrush',
        path: "assets/images/toothbrush.jpg"
      },
      {
        name: 'straw',
        path: "assets/images/straw2.jpg"
      },
      {
        name: 'hairbrush',
        path: "assets/images/hairbrush1.jpg"
      }
    ]
  }

}
