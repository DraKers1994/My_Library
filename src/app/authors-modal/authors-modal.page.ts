import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AnyMxRecord } from 'dns';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-authors-modal',
  templateUrl: './authors-modal.page.html',
  styleUrls: ['./authors-modal.page.scss'],
})
export class AuthorsModalPage implements OnInit {

  author: any;
  authors: any;

  constructor(private libraryService: LibraryService,
  private modalController: ModalController,
  private navParams: NavParams) { }

  ngOnInit() {
    // this.libraryService.getAuthors(this.author.author.id).then(authors=> {
    //   this.authors = authors;
    // })
  }

  ionViewDidEnter(){
    this.author = this.navParams.get("author");
    console.log(this.author.id)
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
