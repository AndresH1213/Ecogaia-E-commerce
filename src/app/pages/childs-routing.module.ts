import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ToothbrushComponent } from './catalog/CDD/toothbrush.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'product',
    loadChildren: ()=> import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  { path: 'about-us', component: AboutUsComponent },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
