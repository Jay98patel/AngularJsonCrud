import { Component, OnInit ,Inject} from '@angular/core';
import {  Database } from '../../../shared/details'
import {  ServiceService } from '../../service/service.service'
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {
  car:Database;
  id:string;
  constructor(private service:ServiceService,private router:ActivatedRoute,@Inject('BaseURL')public BaseURL,private location:Location ) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params.id;
    this.service.getCarId(this.id).pipe().subscribe((car)=>this.car=car)
  }
  goBack(){
    this.location.back();
}

}
