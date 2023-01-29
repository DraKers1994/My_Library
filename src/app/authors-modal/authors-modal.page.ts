import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AnyMxRecord } from 'dns';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-authors-modal',
  templateUrl: './authors-modal.page.html',
  styleUrls: ['./authors-modal.page.scss'],
})
export class AuthorsModalPage implements OnInit {

  filterAuthors : any;

  constructor(private libraryService: LibraryService,
  private modalController: ModalController,
  private navParams: NavParams) { }

  ngOnInit() {
    this.getAuthorData();
  }

  closeModal(){
    this.modalController.dismiss();
  }

  getAuthorData(){
    this.filterAuthors = this.libraryService.authors.filter((a : any) => 
    a.id === this.navParams.get("authorId"))[0]
    console.log(this.filterAuthors)

  }
}
