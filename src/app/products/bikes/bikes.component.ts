import { Component, OnInit ,Inject} from '@angular/core';
import { Database } from '../../shared/details';
import { ServiceService } from '../service/service.service'
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {
  constructor(public service:ServiceService,@Inject('BaseURL')public BaseURL) { }
  bikes:Database[];
  search: string;
  showDiv = {
    update:false
  }

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
      this.updateBike(currentBike);
    }
    else{
      console.log('created');
      this.newBike(currentBike);
      this.service.getAllBikes().subscribe((bike)=>this.bikes=bike);
    }
  }
  newBike(bike:Database){
    this.service.newBikes(bike).subscribe();
    this.service.getAllBikes().subscribe((bike)=>this.bikes=bike);
  }
  updateBike(bike:Database){
    this.service.updateBikes(bike).subscribe(
      ()=>{
        this.service.getAllBikes().subscribe((bike)=>this.bikes=bike);
      }
    );
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
