import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ServiceService } from './service/service.service';
import { FeaturedProductComponent } from './featured-product/featured-product.component'
import { baseURL } from '../shared/base'
@NgModule({
  declarations: [LoginComponent, FormLoginComponent, FeaturedProductComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers:[
    ServiceService,{
      provide:'BaseURL',useValue:baseURL
    }]
})
export class LoginModule { }
