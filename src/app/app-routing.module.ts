import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PagesRoutingModule } from './pages/pages.routes';
import { CartModule } from "./cart/cart.module";
import { AuthModule } from './auth/auth.module';

import { CartComponent } from './cart/cart.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

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