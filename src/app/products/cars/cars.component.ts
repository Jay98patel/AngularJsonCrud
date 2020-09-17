import { Component, OnInit,Inject } from '@angular/core';
import { Database } from '../../shared/details';
import { ServiceService } from '../service/service.service'
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  constructor(public service:ServiceService,@Inject('BaseURL')public BaseURL ) { }
  cars:Database[];
  showDiv = {
    update:false
  }

  ngOnInit(): void {
    this.service.getdetails().subscribe((car)=>this.cars=car)
  }
  delete(id:string){

    console.log(id);
      this.service.deletecar(id).subscribe((car)=>{
      this.service.getdetails().subscribe((car)=>this.cars=car);
    });
    }
  edit(c){
      console.log(c)
      this.service.cuurentCars= Object.assign({},c);
  }
  createupdate(cuurentCars:Database){
    console.log(cuurentCars);
    if(cuurentCars.id!=null){
      console.log('update')
      this.updateCar(cuurentCars);
    }
    else{
      console.log('created');
      this.newCar(cuurentCars);
    }

  }
  newCar(car:Database){
    this.service.newCar(car).subscribe();
    this.service.getdetails().subscribe((car)=>this.cars=car);

  }
  updateCar(car:Database){
    this.service.updateCar(car).subscribe(
      ()=>{
        this.service.getdetails().subscribe((car)=>this.cars=car);
      }
    );
  }

  clear(){
    this.service.cuurentCars={
      id: null,
      name:'',
      description:'',
      release:'',
      image:null
  }
  }

  
}
