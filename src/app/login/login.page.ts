import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_message = {
    email:[
      {type: "required", message: "El email es Obligatorio"},
      {type:"pattern", message: "Tu email no es valido"}
    ],
    password:[
      {type: "required", message: "La contraseña es Obligatoria"},
    ]
    
  }

  errorMessage: any ;

  constructor(private formBuilder: FormBuilder,
     private authenticate: AuthenticateService,
     private navCtrl: NavController,
     private storage: Storage) { 
    this.loginForm= this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "", 
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )

    })

  }

  ngOnInit() {
  }

  goToRegister(){
    this.navCtrl.navigateForward("/register")
  }

  loginUser(credentials: any){
    console.log(credentials);
    this.authenticate.loginUser(credentials).then(res =>{
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/home")
    }).catch(error => {
      this.errorMessage = error
    });
  }

}
