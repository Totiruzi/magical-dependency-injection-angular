import { Book } from "../interfaces/book";

export class ReadBook implements Book {
  title: string;
  author: string;

  constructor(public book: Book ) {
    this.title = book.title;
    this.author = book.author;
  }

  recommendBook() {
    return `Have you read this book ${this.title} by: ${this.author}`
  }
}