import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_message= {
    name:[
      {type: "required", message: "El nombre es Obligatorio"},
    ],
    last_name:[
      {type: "required", message: "El apellido es Obligatorio"},
    ],
    document_type:[
      {type: "required", message: "El tipo de documento es Obligatorio"},
    ],
    document_number:[
      {type: "required", message: "El numero de documento es Obligatorio"},
    ],
    career:[
      {type: "required", message: "La carrera es Obligatoria"},
    ],
    email:[
      {type: "required", message: "El email es Obligatorio"},
      {type:"pattern", message: "Tu email no es valido"}
    ],
    password:[
      {type: "required", message: "La contraseña es Obligatoria"},
    ],
  }


  

  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder) { 

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      ),
      document_type: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      ),
      document_number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      ),
      career: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      )
    });
  }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
  }

}