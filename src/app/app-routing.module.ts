import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PagesRoutingModule } from './pages/pages.routes';
import { CartModule } from "./cart/cart.module";
import { AuthModule } from './auth/auth.module';

import { CartComponent } from './cart/cart.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AdminProductsComponent } from './auth/admin-products/admin-products.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'admin/login',
        component: LogInComponent
    },
    {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AdminGuard],
        canLoad: [AdminGuard]
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
        CartModule,
        AuthModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {  }