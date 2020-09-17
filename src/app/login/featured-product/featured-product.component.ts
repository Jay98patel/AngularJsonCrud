import { Component, OnInit,Inject } from '@angular/core';
import { Database } from '../../shared/details'
import { ServiceService } from '../service/service.service'
@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {


  cars:Database;
  bikes:Database;
  accessories:Database;
  constructor(private service:ServiceService,@Inject('BaseURL')public BaseURL) { }

  ngOnInit(): void {
    this.service.getfirst().subscribe((car)=>this.cars=car);
    this.service.getSecond().subscribe((bike)=>this.bikes=bike);
    this.service.getThird().subscribe((access)=>this.accessories=access);

  }

}
