import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  ServiceService } from '../../service/service.service'
import { Database } from 'src/app/shared/details';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accessdetails',
  templateUrl: './accessdetails.component.html',
  styleUrls: ['./accessdetails.component.scss']
})
export class AccessdetailsComponent implements OnInit {
  acce:Database;
  id:string;
  constructor(private service:ServiceService,private router:ActivatedRoute,@Inject('BaseURL')public BaseURL ,private location:Location) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params.id;
    this.service.getAcceID(this.id).pipe().subscribe((acce)=>this.acce=acce)

  }
  goBack(){
      this.location.back();
  }

}
