import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesRoutingModule } from './accessories-routing.module';
import { AccessoriesComponent } from './accessories.component';
import { ServiceService } from '../service/service.service';
import { AccessFormComponent } from './access-form/access-form.component';
import { AccessdetailsComponent } from './accessdetails/accessdetails.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AccessoriesComponent, AccessFormComponent, AccessdetailsComponent],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    MatIconModule
  ],
  providers:[ServiceService]
})
export class AccessoriesModule { }
