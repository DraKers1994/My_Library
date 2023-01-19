import { Injectable } from '@angular/core';
import { promises } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      if (credentials.email == "kerlisnieto@gmail.com" && credentials.password == "123456")
      {
        accept("Login Exitoso");
      }else {
        reject("Login Fallido");
      }
    });
  }
}
