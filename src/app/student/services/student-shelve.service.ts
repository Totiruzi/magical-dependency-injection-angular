import { ShelveService } from 'src/app/services/shelve.service';
import { Injectable } from '@angular/core';
import { IBook } from 'src/app/interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentShelveService extends ShelveService{

  constructor() {
    super();
  }

  override removeBook(): void {
    alert(`Students can't delete books`);
  }
}
