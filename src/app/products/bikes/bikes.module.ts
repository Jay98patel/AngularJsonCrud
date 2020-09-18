import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesRoutingModule } from './bikes-routing.module';
import { BikesComponent } from './bikes.component';
import { BikesdetailsComponent } from './bikesdetails/bikesdetails.component';
import { ServiceService } from '../service/service.service';
import { BikeFormComponent } from './bike-form/bike-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [BikesComponent, BikesdetailsComponent, BikeFormComponent],
  imports: [
    CommonModule,
    BikesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    Ng2SearchPipeModule
  ]
  ,providers:[ServiceService]
})
export class BikesModule { }
