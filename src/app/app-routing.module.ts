import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { WelcomeRoutingModule } from 'src/welcome/welcome-routing.module';
import { WelcomeModule } from 'src/welcome/welcome.module';
import { LoginModule } from './login/login.module';
import { CarsComponent } from './products/cars/cars.component';
import { CarsModule } from './products/cars/cars.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path:'',redirectTo:'welcome',pathMatch:'full'
  },
  {
    path:'welcome',
    loadChildren:() => import('../welcome/welcome.module').then(m=>WelcomeModule)
  },
  {
    path:'login',
    loadChildren:()=>import('../app/login/login.module').then(m=>LoginModule)
  },
  {
    path:'product',loadChildren:()=>import('./products/products.module').then(m=>ProductsModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
