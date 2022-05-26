import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddFarmModalComponent } from "./farm/add-farm-modal/add-farm-modal.component";

const routes: Routes = [
    {   //PROVISORIO
       path: 'farm-add',
       component: AddFarmModalComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}