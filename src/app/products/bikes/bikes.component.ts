import { Component, OnInit ,Inject} from '@angular/core';
import { Database } from '../../shared/details';
import { ServiceService } from '../service/service.service'
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {
  bikes:Database[];
  constructor(public service:ServiceService,@Inject('BaseURL')public BaseURL) { }

  ngOnInit(): void {
    this.service.getAllBikes().subscribe((car)=>this.bikes=car);
  }
  delete(id:string){
    console.log(id);
      this.service.deleteBikes(id).subscribe((car)=>{
      this.service.getAllBikes().subscribe((car)=>this.bikes=car);
  });
  }
  edit(c){
    console.log(c)
    this.service.currentBike= Object.assign({},c);
  }
  createupdate(currentBike:Database){
    console.log(currentBike);
    if(currentBike.id!=null){
      console.log('update')
      this.updateCar(currentBike);
    }
    else{
      console.log('created');
      this.newCar(currentBike);
    }
  }
  newCar(bike:Database){
    this.service.newBikes(bike).subscribe();
    this.service.getAllBikes().subscribe((car)=>this.bikes=car);
  }
  updateCar(bike:Database){
    this.service.updateBikes(bike).subscribe();
    this.service.getAllBikes().subscribe((car)=>this.bikes=car);
  }
  clear(){
    this.service.currentBike={
      id: null,
      name:'',
      description:'',
      release:'',
      image:null
  }
  }
}
