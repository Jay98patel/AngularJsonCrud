import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsComponent } from './cars.component';

const routes: Routes = [
  {
    path:'' ,component:CarsComponent
  },
  {
    path:':id',component:CarsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
