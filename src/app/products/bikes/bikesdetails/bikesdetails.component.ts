import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  ServiceService } from '../../service/service.service'
import { Database } from 'src/app/shared/details';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bikesdetails',
  templateUrl: './bikesdetails.component.html',
  styleUrls: ['./bikesdetails.component.scss']
})
export class BikesdetailsComponent implements OnInit {
  bikes:Database;
  id:string;
  constructor(private service:ServiceService,private router:ActivatedRoute,@Inject('BaseURL')public BaseURL,private location:Location ) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params.id;
    this.service.getBikeID(this.id).pipe().subscribe((bikes)=>this.bikes=bikes)
  }
  goBack(){
    this.location.back();
}

}
