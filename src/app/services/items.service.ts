import { Injectable, Optional,SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  count$: Observable<number> = this.count.asObservable();
  constructor(
    @Optional() @SkipSelf() existingService: ItemsService
    ) {
    if (existingService) {
      throw Error ('The service has already been provided in th app. Avoid providing it again in child modules')
    }
  }

  setCount(countVal: number) {
    this.count.next(countVal);
  }
}
