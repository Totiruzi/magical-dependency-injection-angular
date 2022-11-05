import { Inject, Injectable } from '@angular/core';
import { ReadBook } from '../classes/read-book.class';
import { Book } from '../interfaces/book';
import { READBOOK } from '../classes/read-book-token';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    {
      title: 'Learning Angular - Third Edition',
      author: 'Aristeidis Bampakos and Author:Pablo Deeleman'
    },
    {
      title: 'Angular Projects - Second Edition',
      author: 'Aristeidis Bampakos and Author:Mark Thompson'
    },
    {
      title: 'Angular Cookbook',
      author: 'Muhammad Ahsan Ayaz and Najla Obaid'
    },
    {
      title: 'Simply Scheme Introducing Computer Science',
      author: 'Brian Harvey and Matthew Wright'
    },
    {
      title: 'Reactive Patterns with RxJS for Angular',
      author: 'Lamis Chebbi'
    },
    {
      title: `The Programmer's Brain`,
      author: 'Felienne Hermans'
    },
    {
      title: 'Test-Driven DevelopMent',
      author: 'Kent Beck'
    }
  ]
  constructor(@Inject(READBOOK) public readBook: typeof ReadBook) { }

  getBook() {
    const book = this.books[Math.floor(Math.random() * this.books.length)];
    return new ReadBook(book);
    // return new this.readBook(book);
  }
}
