import { StudentShelveService } from './services/student-shelve.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentRoutingModule } from './sudent.routing.module';
import { SharedModule } from './../shared/shared.module';
import { ShelveService} from '../services/shelve.service';



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
      provide: ShelveService,
      useClass: StudentShelveService
    }
  ]
})
export class StudentModule { }
