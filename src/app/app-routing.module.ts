import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from './pages/pages.routes';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
    {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
    },
    {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
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
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {  }