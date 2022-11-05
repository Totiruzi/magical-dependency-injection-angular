import { Injectable } from '@angular/core';
import { Temp } from '../interfaces/temp';


@Injectable({
  providedIn: 'root'
})
export class TempService implements Temp{

  constructor() { }
  cold(val: number) {
    this.saveTempLog(val, 'cold')
  }

  warm(val: number) {
    this.saveTempLog(val, 'warm')
  }

  hot(val: number) {
    this.saveTempLog(val, 'hot')
  }

  furnace(val: number) {
    this.saveTempLog(val, 'furnace')
  }


  saveTempLog(val: number, type: string) {
    const key = `log_${type}`;
    const logs = JSON.parse(localStorage.getItem(key) || '[]');
    logs.push(val);
    localStorage.setItem(key, JSON.stringify(logs));
  }
}
