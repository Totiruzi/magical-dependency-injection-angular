import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IShelveService } from './../interfaces/shelve-service.interface';
import { IBook } from './../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class ShelveService implements IShelveService {
  shelveArchive = new BehaviorSubject([]);
  $shelve: Observable<IBook[]> = this.shelveArchive.asObservable();

  constructor() {}

  loadBooks(): void {
    const shelve = JSON.parse(window.localStorage.getItem('shelve') || '[]');
    this.shelveArchive.next(shelve);
  }

  addBook(book: IBook): void {
    const shelve = [book, ...this.shelveArchive.value];
    this.shelveArchive.next(shelve);
    window.localStorage.setItem('shelve', JSON.stringify(shelve));
  }

  removeBook(book: IBook): void {
    const shelve = this.shelveArchive.value.filter(item => item.id !== book.id);
    this.shelveArchive.next([...shelve]);
    window.localStorage.setItem('shelve', JSON.stringify(shelve));
  }
}
