import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentRoutingModule } from './sudent.routing.module';
import { SharedModule } from './../shared/shared.module';
import { APP_CONFIG } from 'src/app/constants/app-config';
import { StudentConfig } from './constants/student.config';



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: StudentConfig
    }
  ]
})
export class StudentModule { }
