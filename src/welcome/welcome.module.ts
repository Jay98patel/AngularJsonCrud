import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WelcomeComponent } from './welcome.component';
import { SignUpServicesService } from './services/sign-up-services.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomePopUpComponent } from './welcome-pop-up/welcome-pop-up.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
@NgModule({
  declarations: [WelcomeComponent, WelcomePopUpComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [SignUpServicesService],
})
export class WelcomeModule { }
