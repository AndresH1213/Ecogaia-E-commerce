import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrdersComponent } from './orders/orders.component';
import { ComboComponent } from './catalog/combo/combo.component';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'product',
    loadChildren: ()=> import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  { path: 'combo/:title', component: ComboComponent},
  { path: 'orders', component: OrdersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'success', component: SucessComponent },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
