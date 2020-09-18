import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup,FormControl,Validators,ValidationErrors , ValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Database } from '../../shared/details'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseURL:string;
  constructor(private http:HttpClient) { 
    this.baseURL=environment.apiUrl;
  }
  
  
  //for Login form
  login:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
// end of for Login form
getfirst():Observable<Database>{
  return this.http.get<Database>(this.baseURL+'cars?id=1');
}
getSecond():Observable<Database>{
  return this.http.get<Database>(this.baseURL+'bikes?id=0');
}
getThird():Observable<Database>{
  return this.http.get<Database>(this.baseURL+'accessories?id=8')
}
}
