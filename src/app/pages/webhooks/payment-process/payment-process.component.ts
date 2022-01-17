import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-payment-process',
  templateUrl: './payment-process.component.html',
  styles: [`
   .container {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .title-success {
    color: #896F5A;
    font-family: 'Libre Baskerville', Verdana, Serif;
    font-size: 2rem
  }
  .image-status {
    width: 600px;
    height: 400px
  }
  h2 {
    color: #896F5A;
  }
  `
  ]
})
export class PaymentProcessComponent implements OnInit {

  public counter = 15;
  public status = ''
  public preferenceId = ''
  public orderNumber = ''
  public interval$: any = interval(1000);
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((resp:any) => {
      console.log(resp)
      this.status = resp.collection_status
      this.preferenceId = resp.preference_id
    })
    this.interval$.subscribe((value: any) => {
      this.counter = 15 - value;
      if (this.counter === 0) {
        // this.router.navigateByUrl('/')
      }
    });
    
  }

}
