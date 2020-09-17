import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BikesComponent } from './bikes/bikes.component';
import { CarsComponent } from './cars/cars.component';
import { CarsModule } from './cars/cars.module';
import { ProductsComponent } from './products.component';
import { ProductsModule } from './products.module';

const routes: Routes = [
  {
    path:'',
    component:ProductsComponent,
    children:[
      {path:'',redirectTo:'cars',pathMatch:'full'},
      {path:'cars',loadChildren:()=>import('../products/cars/cars.module').then(m=>CarsModule)},
      // {path:'cars' ,component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'accessories',component:AccessoriesComponent}
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
