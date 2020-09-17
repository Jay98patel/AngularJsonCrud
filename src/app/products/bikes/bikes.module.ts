import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesRoutingModule } from './bikes-routing.module';
import { BikesComponent } from './bikes.component';
import { BikesdetailsComponent } from './bikesdetails/bikesdetails.component';
import { ServiceService } from '../service/service.service'

@NgModule({
  declarations: [BikesComponent, BikesdetailsComponent],
  imports: [
    CommonModule,
    BikesRoutingModule
  ]
  ,providers:[ServiceService]
})
export class BikesModule { }
