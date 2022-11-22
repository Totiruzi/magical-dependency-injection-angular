import { Injectable, Optional,SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ItemsService {
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  count$: Observable<number> = this.count.asObservable();
  constructor() { }

  setCount(countVal: number) {
    this.count.next(countVal);
  }
}
