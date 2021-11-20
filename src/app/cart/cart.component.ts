import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [`
    .input-cant-cart{
      width: 50px
    }
    .cart-img {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      margin: auto;
    }
    .remove_container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
  ]
})
export class CartComponent implements OnInit {

  public states: string[] = [];
  public cities = [];

  orderForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    state: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required]
  })

  selectedState!: String;

  // UI loading box
  loading: boolean = false;

  constructor(private fb: FormBuilder,
              private helper: HelpersService) { }
  
  ngOnInit(): void {
    this.states = ['Amazonas','Antioquia','Arauca','Atlántico','Bolivar','Caldas','Caquetá','Casanare','Cauca','Cesar','Chocó',
    'Córdoba','Cundinamarca','Guainía','La Guajira','Guaviare','Huila','Magdalena','Meta','Norte de Santander','Nariño','Putumayo',
    'Quindío','Risaralda','San Andrés','Santander','Sucre','Tolima','Valle del Cauca','Vaupés','Vichada']

    this.orderForm.get('state')?.valueChanges.pipe(
      tap(() => {
        this.orderForm.get('city')?.reset('');
        this.loading = true;
      }),
      switchMap(state => this.helper.getCities(state))
    ).subscribe( (cities: any) => {
      console.log(cities)
      this.cities = cities;
      this.loading = false;
    })
  }

  removeItem(item: number) {
    console.log(item)
  }

  checkOut() {
    console.log(this.orderForm.value)
  }


}
