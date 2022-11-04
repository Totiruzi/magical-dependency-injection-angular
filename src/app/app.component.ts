import { Component } from '@angular/core';
import { ReadBook } from './classes/read-book.class';
import { BookService } from './services/book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di-magical-angular';
  book!: ReadBook;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.book = this.bookService.getBook();
  }
}
