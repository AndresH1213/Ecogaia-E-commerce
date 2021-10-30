import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu'
import { ButtonModule } from 'primeng/button'
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TieredMenuModule,
    MenuModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
