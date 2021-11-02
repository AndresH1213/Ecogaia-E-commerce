import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { IndividualComponent } from './individual/individual.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:name', component: IndividualComponent },
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
