import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';
import { CardModule } from 'primeng/card';

import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ButtonModule } from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';



@NgModule({
  declarations: [
    LogInComponent,
    AdminProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // PrimeNG
    DropdownModule,
    CardModule,
    ButtonModule,
    TooltipModule
  ]
})
export class AuthModule { }
