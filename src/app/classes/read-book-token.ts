import { InjectionToken } from "@angular/core";
import { ReadBook } from './read-book.class';

export const READBOOK = new InjectionToken('Readbook', {
  providedIn: 'root',
  factory: () => ReadBook
});