import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { AccessoriesComponent } from './accessories.component';
import { ServiceService } from '../service/service.service'

@NgModule({
  declarations: [AccessoriesComponent],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    
  ],providers:[ServiceService]
})
export class AccessoriesModule { }
