import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown'

import { SharedModule } from '../shared/shared.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { ComboComponent } from './combo/combo.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './home/home.component';
import { IndividualComponent } from './individual/individual.component';
import { ProductsComponent } from './products/products.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutUsComponent,
    HomeComponent,
    ComboComponent,
    IndividualComponent,
    ProductsComponent,
    ComponentsComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    PagesComponent,
    AboutUsComponent,
    HomeComponent,
    ComboComponent,
    IndividualComponent,
    ProductsComponent
  ]
})
export class PagesModule { }
