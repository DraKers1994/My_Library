import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthorsModalPage } from '../authors-modal/authors-modal.page';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors: any;


  constructor(private libraryService: LibraryService,
    private modalController : ModalController ) { }


  ngOnInit() {
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
      console.log(this.authors)
    })
  }

  async showAuthor(authorId: any){
    console.log(authorId)
     const modal = await this.modalController.create({
       component: AuthorsModalPage,
       componentProps: {
         authorId: authorId
       }
     });
     return await modal.present();
   }

}
