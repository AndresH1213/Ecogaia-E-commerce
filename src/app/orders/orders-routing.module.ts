import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ActualComponent } from "./actual/actual.component";
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
    {
        path: '',
        component: ActualComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }