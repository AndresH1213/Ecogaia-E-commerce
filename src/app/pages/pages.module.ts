import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

import { SharedModule } from '../shared/shared.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { imageWindowComponent } from './components/image-window/image-window.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    HomeComponent,
    ProductsComponent,
    imageWindowComponent,
    PagesComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    CardModule,
    DropdownModule,
    CarouselModule,

    SharedModule
  ],
  exports: [
    PagesComponent,
    AboutUsComponent,
    HomeComponent,
    ProductsComponent,
  ]
})
export class PagesModule { }
