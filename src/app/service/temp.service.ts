import { Injectable } from '@angular/core';
import { Temp } from '../interfaces/temp';


@Injectable()
export class TempService implements Temp{

  constructor() { }
  log(val: number) {
    this.saveTempLog(val, 'log')
  }

  warn(val: number) {
    this.saveTempLog(val, 'warn')
  }

  info(val: number) {
    this.saveTempLog(val, 'info')
  }

  error(val: number) {
    this.saveTempLog(val, 'error')
  }


  saveTempLog(val: number, type: string) {
    const key = `log_${type}`;
    const logs = JSON.parse(localStorage.getItem(key) || '[]');
    logs.push(val);
    localStorage.setItem(key, JSON.stringify(logs));
  }
}
