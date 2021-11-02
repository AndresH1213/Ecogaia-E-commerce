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
        name: 'gato',
        path: "../../assets/images/1617958201228-calabaza.png"
      },
      {
        name: 'gato',
        path: "../../assets/images/BRDM7234.JPG"
      },
      {
        name: 'gato',
        path: "../../assets/images/BRDM7234.JPG"
      },
      {
        name: 'gato',
        path: "../../assets/images/BRDM7234.JPG"
      }
    ]
  }

}
