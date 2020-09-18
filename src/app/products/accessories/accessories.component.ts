import { Component, OnInit,Inject } from '@angular/core';
import { Database } from '../../shared/details';
import { ServiceService } from '../service/service.service'
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
  accessories:Database[];
  search: string;
  constructor(public service:ServiceService,@Inject('BaseURL')public BaseURL) { }

  ngOnInit(): void {
    this.service.getAllaccesories().subscribe((acce)=>this.accessories=acce);
  }
  delete(id:string){
    console.log(id);
      this.service.deleteaccesories(id).subscribe((acce)=>{
      this.service.getAllaccesories().subscribe((acce)=>this.accessories=acce);
  });
  }
  edit(c){
    console.log(c)
    this.service.currentAccessories= Object.assign({},c);
  }
  createupdate(cuureacces:Database){
    console.log(cuureacces);
    if(cuureacces.id!=null){
      console.log('update')
      this.updateAcce(cuureacces);
    }
    else{
      console.log('created');
      this.newAcce(cuureacces);
      this.service.getAllaccesories().subscribe((acce)=>this.accessories=acce);
    }
  }
  newAcce(acce:Database){
    this.service.newaccesories(acce).subscribe();
    this.service.getAllaccesories().subscribe((acce)=>this.accessories=acce);
  }
  updateAcce(acce:Database){
    this.service.updateaccesories(acce).subscribe(
      ()=>{
        this.service.getAllaccesories().subscribe((acce)=>this.accessories=acce);
      }
    );
  }
  clear(){
    this.service.currentAccessories={
      id: null,
      name:'',
      description:'',
      release:'',
      image:null
  }
  }
}
