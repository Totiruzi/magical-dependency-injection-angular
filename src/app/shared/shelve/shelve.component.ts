import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './../../interfaces/book.interface';
import { Book } from './../../constants/book';
import { ShelveService } from 'src/app/services/shelve.service';
import { APP_CONFIG } from 'src/app/constants/app-config';
import { IAppConfig } from './../../constants/app-config';

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.scss']
})
export class ShelveComponent implements OnInit {
  $shelve: Observable<IBook[]>;
  pickedBook: Book = '' as null;
  books: string[] = Object.values(Book);
  canDeleteBooks: boolean;

  constructor(
    private shelveService: ShelveService,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {}

  ngOnInit(): void {
    this.$shelve = this.shelveService.$shelve;
    this.shelveService.loadBooks();
    this.canDeleteBooks = this.config.canDeleteBooks;
  }

  addPickedBookToShelve() {
    this.shelveService.addBook({
      id: Date.now(),
      name: this.pickedBook
    })
  }

  deleteBookFromShelve(book: IBook) {
    this.shelveService.removeBook(book);
  }
}
