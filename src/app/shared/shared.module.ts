import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShelveComponent } from './shelve/shelve.component';



@NgModule({
  declarations: [ShelveComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ShelveComponent]
})
export class SharedModule { }
