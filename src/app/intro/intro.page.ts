import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0, //slide inicial
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, // que slides enten centrados
    speed: 400 //velocidad de los movimientos del slide
  }

  slides = [
    {
      class: "slide1",
      title: "Biblioteca Digital",
      img: "assets/1.png",
      description: "Aquí tienes tu biblioteca digital, Bienvenid@!",
    },
    {
      class: "slide2",
      title: "Biblioteca Digital",
      img: "assets/2.png",
      description: "Encuentra todos los libros que desees de forma gratuita"
  
    },
    {
      class: "slide3",
      title: "Biblioteca Digital",
      img: "assets/3.png",
      description: "Puedes guardar libros para leerlos cuando quieras"
    },
    {
      class: "slide4",
      title: "Biblioteca Digital",
      img: "assets/4.png",
      description: "Toda la biblioteca digital en tu celular solo dando un click",
    }
  ]

  constructor(private router: Router, private storage:Storage) {
   }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/login"); //cmb home
  }

  ngOnInit() {
  }

}
