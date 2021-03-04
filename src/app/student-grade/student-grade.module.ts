import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentGradeComponent } from './student-grade.component';
import { GradeToNumPipe } from '../grade-to-num.pipe';
import { StudentsGradesAveragePipe } from '../students-grades-average.pipe';
import { AveragePipe } from '../average.pipe';


@NgModule({
  declarations: [
    StudentGradeComponent,
    GradeToNumPipe, 
    StudentsGradesAveragePipe,
    AveragePipe],
  imports: [CommonModule],
  exports: [StudentGradeComponent],
})
export class StudentGradeModule {}
