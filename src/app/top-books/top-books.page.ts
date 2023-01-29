import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-top-books',
  templateUrl: './top-books.page.html',
  styleUrls: ['./top-books.page.scss'],
})
export class TopBooksPage implements OnInit {

  listTopBooks: any;

  constructor(private libraryService: LibraryService,) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.GetListTopBooks();
  }

  GetListTopBooks(){
    this.libraryService.GetListTopBooks().then((data:any) => {
      this.listTopBooks =  data
      console.log(data)
    })
  }

}
