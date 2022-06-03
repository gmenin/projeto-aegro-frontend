import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FarmListComponent } from "./farm/farm-list/farm-list.component";
import { GlebeListComponent } from "./glebe/glebe-list/glebe-list.component";
import { ProductionListComponent } from "./production/production-list/production-list.component";

const routes: Routes = [
    {
      path: '',
      component: FarmListComponent
    },
    {
      path: 'farm-detail/:id',
      component: GlebeListComponent
    },
    {
      path: 'glebe-detail/:id',
      component: ProductionListComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
