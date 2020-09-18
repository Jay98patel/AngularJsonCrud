import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessdetailsComponent } from './accessdetails/accessdetails.component';
import { AccessoriesComponent } from './accessories.component';

const routes: Routes = [
  {path:'',component:AccessoriesComponent},
  {
    path:':id',component:AccessdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoriesRoutingModule { }
