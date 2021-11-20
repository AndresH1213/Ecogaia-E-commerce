import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CatalogRoutingModule } from './catalog-routing.module';

import { BrushHairComponent } from './CCB/brush-hair.component';
import { ButtonBackProductsComponent } from '../components/button-back-products/button-back-products.component';
import { ComboComponent } from './combo/combo.component';
import { CupComponent } from './CMT/cup.component';
import { ImageCarouselComponent } from '../components/image-carousel/image-carousel.component';
import { StrawComponent } from './PPG/straw.component';
import { ToothbrushComponent } from './CDD/toothbrush.component';
import { PagesModule } from '../pages.module';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    BrushHairComponent,
    ComboComponent,
    CupComponent,
    StrawComponent,
    ToothbrushComponent,
    ButtonBackProductsComponent,
    ImageCarouselComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule
  ],
})
export class CatalogModule { }
