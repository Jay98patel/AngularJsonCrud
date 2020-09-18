import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsDetailsComponent } from '../cars/cars-details/cars-details.component';
import { BikesComponent } from './bikes.component';
import { BikesdetailsComponent } from './bikesdetails/bikesdetails.component';

const routes: Routes = [
  {
    path:'' ,component:BikesComponent
  },
  {
    path:':id',component:BikesdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
