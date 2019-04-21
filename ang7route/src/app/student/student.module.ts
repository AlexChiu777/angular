import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module'


import { StudentListComponent } from './student-list/student-list.component'
import { StudentDetailComponent } from './student-detail/student-detail.component'
import { StudentComponent } from './student.component'

@NgModule({
  declarations: [StudentComponent, StudentDetailComponent, StudentListComponent],
  imports: [
    CommonModule,
    StudentRoutingModule    
  ]
})
export class StudentModule { }
