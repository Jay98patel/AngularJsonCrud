import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { CarFormComponent } from './car-form/car-form.component'
import { CarsComponent } from './cars.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [CarsDetailsComponent,CarsComponent, CarFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CarsRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    Ng2SearchPipeModule
   
  ],
  providers:[ServiceService]
})
export class CarsModule { }
