import { Injectable } from '@angular/core';
import { promises } from 'dns';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      const user= this.getRegisterUser();
      user.then(Users =>{
      console.log("Password encriptada: " + Users.password)
      console.log("Password desencriptada: " + atob(Users.password))
      if (atob(Users.password) == credentials.password && Users.email == credentials.email)
      {
        accept("Login Exitoso");
      }else {
        reject("Login Fallido");
      }
      })
    })
  }


  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return  this.storage.set("user", userData);

  }

  getRegisterUser(){
    return this.storage.get("user");
  }

}
