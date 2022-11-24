import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibarianRoutingModule } from './libarian/libarian-routing-module';
import { LibarianComponent } from './libarian/libarian.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [
    LibarianComponent
  ],
  imports: [
    CommonModule,
    LibarianRoutingModule,
    SharedModule
  ]
})
export class LibarianModule { }
