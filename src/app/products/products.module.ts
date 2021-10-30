import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { IndividualComponent } from './individual/individual.component';
import { ComboComponent } from './combo/combo.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    CatalogComponent,
    IndividualComponent,
    ComboComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
