import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-temp-range',
  templateUrl: './temp-range.component.html',
  styleUrls: ['./temp-range.component.scss']
})
export class TempRangeComponent implements OnInit {
  tempForm = new FormGroup({
    degree: new FormControl('',Validators.pattern('([0-9]+).([0-9]+)'))
  });

  tempTag: any = '24.0';

  constructor() { }

  ngOnInit(): void {
    this.tempForm.get('degree')!.setValue(this.tempTag);
  }

  formSubmit() {
    if (!this.tempForm.valid) {
      alert('Incorect temperature value');
      return;
    }

    this.tempTag = this.tempForm.get('degree')!.value
  }

}
