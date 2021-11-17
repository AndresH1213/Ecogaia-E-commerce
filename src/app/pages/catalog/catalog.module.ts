import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrushHairComponent } from './CCB/brush-hair.component';
import { ComboComponent } from './combo/combo.component';
import { CupComponent } from './CMT/cup.component';
import { StrawComponent } from './PPG/straw.component';
import { ToothbrushComponent } from './CDD/toothbrush.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ButtonBackProductsComponent } from '../components/button-back-products/button-back-products.component';



@NgModule({
  declarations: [
    BrushHairComponent,
    ComboComponent,
    CupComponent,
    StrawComponent,
    ToothbrushComponent,
    ButtonBackProductsComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CatalogModule { }
