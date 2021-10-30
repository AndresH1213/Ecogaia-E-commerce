import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [
    {
        path: '',
        component: AboutUsComponent
    },
    {
        path: '**',
        redirectTo: ""
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {  }