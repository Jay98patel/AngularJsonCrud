import { Injectable } from '@angular/core';
import { AbstractControl,FormGroup,FormControl,Validators,ValidationErrors , ValidatorFn} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Injectable({
  providedIn: 'root'
})
export class SignUpServicesService {

  constructor() { }
  // passwordMatchValidator:ValidatorFn=(control:FormGroup):ValidationErrors  | null =>{
  //   const password = control.get('password').value; 
  //   console.log("password",password);
  //   const repeatPassword = control.get('cnpass').value;
  //   return password.value != repeatPassword.value ? { 'passwordError': true } : null;
  // }
  passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
   if (formGroup.get('password').value === formGroup.get('cnpass').value)
     return null;
   else
     return {passwordMismatch: true};
 };
  form:FormGroup=new FormGroup({
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    cnpass:new FormControl('',[Validators.required,Validators.minLength(6)])
  },{ validators: this.passwordMatchValidator });
  
  
  get password() { return this.form.get('password'); }
  
  get cnpass() { return this.form.get('cnpass'); }

  onPasswordInput() {
    if (this.form.hasError('passwordMismatch'))
    this.cnpass.setErrors([{'passwordMismatch': true}]);
    else
    this.cnpass.setErrors(null);
  }
}
