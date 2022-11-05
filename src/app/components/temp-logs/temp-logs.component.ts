import { TempService } from './../../service/temp.service';
import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
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

  constructor(@Optional() private tempService: TempService) {
    !TempService ? this.temps = console 
      : this.temps = this.tempService;
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
      this.temps.warn(message)
    }
    this.logs.push(message);
  }

}
