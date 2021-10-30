import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualComponent } from './actual/actual.component';
import { HistoryComponent } from './history/history.component';

import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    ActualComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
