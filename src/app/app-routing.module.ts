import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddFarmModalComponent } from "./farm/add-farm-modal/add-farm-modal.component";
import { FarmListComponent } from "./farm/farm-list/farm-list.component";

const routes: Routes = [
    {   
        path: '',
        component: FarmListComponent
     }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}