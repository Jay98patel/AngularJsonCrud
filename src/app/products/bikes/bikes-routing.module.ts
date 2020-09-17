import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes.component';
import { BikesdetailsComponent } from './bikesdetails/bikesdetails.component';

const routes: Routes = [
  {
    path:'' ,component:BikesComponent
  },
  {
    path:':id',loadChildren:()=>import('../cars/cars-details/cars-details.component').then(m=>BikesdetailsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
