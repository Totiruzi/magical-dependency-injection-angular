import { TempService } from './../../service/temp.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Temp } from './../../interfaces/temp';

@Component({
  selector: 'app-temp-logs',
  templateUrl: './temp-logs.component.html',
  styleUrls: ['./temp-logs.component.scss']
})
export class TempLogsComponent implements OnInit, OnChanges {
  @Input() tempType: string = '';
  logs: string[] = [];
  temps: Temp;

  constructor(private tempService: TempService) {
    this.temps = tempService;
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes?.['tempType'].currentValue;
    let message;
    if(changes?.['tempType'].isFirstChange()) {
      message = `initial temperature is ${currentValue.trim()}`
    }else {
      message = `temperature changed to ${currentValue.trim()}` 
      this.temps.warm(message)
    }
    this.logs.push(message);
  }

}
