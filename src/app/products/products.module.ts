import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule} from '@angular/material/sidenav';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatSidenavModule,
    
    MatListModule
  ],providers:[]
})
export class ProductsModule { }
