import { IBook } from './book.interface';
export interface IShelveService {
  loadBooks(): void,
  addBook(book: IBook): void,
  removeBook(book: IBook): void
}