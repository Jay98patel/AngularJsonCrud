import { Component, OnInit } from '@angular/core';
import { SignUpServicesService } from './services/sign-up-services.service';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog }  from '@angular/material/dialog';
import { WelcomePopUpComponent } from './welcome-pop-up/welcome-pop-up.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('cform') feedbackFormDirective;
  constructor(public service:SignUpServicesService,public dialog:MatDialog) { }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.openLoginForm()
     }, 1000);
  }
  onSubmit(){
    this.feedbackFormDirective.resetForm();
  }
  btnClick= function () {
    this.router.navigateByUrl('/login');
  }
  public openLoginForm(){  
    this.dialog.open(WelcomePopUpComponent,{width: '500px',height:'450px'});

  }

}
