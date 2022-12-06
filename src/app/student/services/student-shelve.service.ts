import { ShelveService } from '../../services/shelve.service';
import { Injectable } from '@angular/core';

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
