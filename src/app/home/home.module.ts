import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component:HomeComponent}])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
