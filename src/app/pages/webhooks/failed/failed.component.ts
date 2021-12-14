import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styles: [`
    .container {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .title-failure {
    color: #896F5A;
    font-family: 'Libre Baskerville', Verdana, Serif;
    font-size: 2rem
  }
  .image-failure {
    width: 600px;
    height: 400px
  }
  h2 {
    color: #896F5A;
  }
  `
  ]
})
export class FailedComponent implements OnInit {

  public counter = 15;
  public interval$: any = interval(1000);
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.interval$.subscribe((value: any) => {
      this.counter = 15 - value;
      if (this.counter === 0) {
        this.router.navigateByUrl('/')
      }
    });
    
  }

}