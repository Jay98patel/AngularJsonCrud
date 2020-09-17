import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  @ViewChild('cform') feedbackFormDirective;
  constructor(public service:ServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.feedbackFormDirective.resetForm();
  }

}
