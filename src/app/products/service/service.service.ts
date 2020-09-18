import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs'
import { map,catchError } from 'rxjs/operators';
import { Database } from '../../shared/details'
import { environment } from 'src/environments/environment';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseURL:string;
  constructor(private http:HttpClient) {
    this.baseURL=environment.apiUrl;
   }
  cuurentCars:Database={
    id: null,
    name:'',
    description:'',
    release:'',
    image:null
}
currentBike:Database={
  id: null,
  name:'',
  description:'',
  release:'',
  image:null
}
currentAccessories:Database={
  id: null,
  name:'',
  description:'',
  release:'',
  image:null
}
headers=new HttpHeaders().set('Content-Type','application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  //For Cars
getdetails():Observable<Database[]>{
  return this.http.get<Database[]>(this.baseURL+'cars').pipe(
map((data: any[])=> data.map((item: any)=> {
  item.update = false
  return item;
}))
  );
}

getCarId(id):Observable<string[] | any>{
  return this.http.get<Database>(this.baseURL+'cars/'+id);
}
deletecar(id:string):Observable<Database>{
  return this.http.delete<Database>(this.baseURL+'cars'+'/'+id);
}
newCar(car:Database):Observable<Database>{
  return this.http.post<Database>(this.baseURL +'cars',car,this.httpOptions)  
}
updateCar(car:Database):Observable<Database>{
  return this.http.put<Database>(this.baseURL +'cars'+'/'+car.id,car,this.httpOptions)  
}

//For bikes
  getAllBikes():Observable<Database[]>{
    return this.http.get<Database[]>(this.baseURL+'bikes').pipe(
      map((data: any[])=> data.map((item: any)=> {
        item.update = false
        return item;
      }))
        );
  }
  getBikeID(id):Observable<string[] | any>{
    return this.http.get<Database>(this.baseURL+'bikes/'+id)
  }
  deleteBikes(id:string):Observable<Database>{
    return this.http.delete<Database>(this.baseURL+'bikes'+'/'+id);
  }
  newBikes(bike:Database):Observable<Database>{
    return this.http.post<Database>(this.baseURL +'bikes',bike,this.httpOptions)  
  }
  updateBikes(bike:Database):Observable<Database>{
    return this.http.put<Database>(this.baseURL +'bikes'+'/'+bike.id,bike,this.httpOptions)  
  }

  //For Accessories
  getAllaccesories():Observable<Database[]>{
    return this.http.get<Database[]>(this.baseURL+'accessories').pipe(
      map((data: any[])=> data.map((item: any)=> {
        item.update = false
        return item;
      }))
    );
  }
  getAcceID(id):Observable<string[] | any>{
    return this.http.get<Database>(this.baseURL+'accessories/'+id)
  }
  deleteaccesories(id:string):Observable<Database>{
    return this.http.delete<Database>(this.baseURL+'accessories'+'/'+id);
  }
  newaccesories(accessories:Database):Observable<Database>{
    return this.http.post<Database>(this.baseURL +'accessories',accessories,this.httpOptions)  
  }
  updateaccesories(accessories:Database):Observable<Database>{
    return this.http.put<Database>(this.baseURL +'accessories'+'/'+accessories.id,accessories,this.httpOptions)  
  }
}
