import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
