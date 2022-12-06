import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './../../interfaces/book.interface';
import { Book } from './../../constants/book';
import { ShelveService } from '../../services/shelve.service';

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.scss']
})
export class ShelveComponent implements OnInit {
  $shelve: Observable<IBook[]>;
  pickedBook: Book = '' as null;
  books: string[] = Object.values(Book);

  constructor(private shelveService: ShelveService) { }

  ngOnInit(): void {
    this.$shelve = this.shelveService.$shelve;
    this.shelveService.loadBooks();
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
