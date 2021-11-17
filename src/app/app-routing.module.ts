import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from './pages/pages.routes';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CartComponent } from './cart/cart.component';
import { CartModule } from "./cart/cart.module";

const routes: Routes = [
    {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        component: NopagefoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        CartModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {  }