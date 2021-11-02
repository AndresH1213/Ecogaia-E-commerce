import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from "./log-in/log-in.component";
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
    {
        path: 'signup',
        component: SignInComponent
    },
    {
        path: 'login',
        component: LogInComponent
    },
    {
        path: '**',
        redirectTo: 'signup'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {  }