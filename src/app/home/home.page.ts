import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpt = {
    initialSlide: 0, //slide inicial
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, // que slides enten centrados
    speed: 400 //velocidad de los movimientos del slide
  }
  constructor() {}

}
