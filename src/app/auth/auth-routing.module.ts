import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from "./log-in/log-in.component";
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
    {
        path: 'registrarse',
        component: SignInComponent
    },
    {
        path: 'ingresar',
        component: LogInComponent
    },
    {
        path: '**',
        redirectTo: 'ingresar'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {  }