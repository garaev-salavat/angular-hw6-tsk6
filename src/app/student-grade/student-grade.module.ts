import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentGradeComponent } from './student-grade.component';



@NgModule({
  declarations: [StudentGradeComponent],
  imports: [
    CommonModule
  ],
  exports: [StudentGradeComponent]
})
export class StudentGradeModule { }
