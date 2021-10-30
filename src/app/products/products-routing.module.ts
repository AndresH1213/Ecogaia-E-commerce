import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from "./catalog/catalog.component";
import { ComboComponent } from './combo/combo.component';
import { IndividualComponent } from "./individual/individual.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component:CatalogComponent},
            {path: 'combo/:combo', component: ComboComponent},
            {path: ':nombre', component: IndividualComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }