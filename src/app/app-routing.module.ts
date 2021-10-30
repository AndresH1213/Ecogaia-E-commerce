import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'productos',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
    },
    {
        path: 'ordenes',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
    },
    {
        path: 'carrito',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    },
    {
        path: 'nosotros',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }