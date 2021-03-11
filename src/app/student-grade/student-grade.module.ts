import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentGradeComponent } from './student-grade.component';
import { GradeToNumPipe } from '../grade-to-num.pipe';
import { StudentsGradesAveragePipe } from '../students-grades-average.pipe';
import { AveragePipe } from '../average.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentGradeComponent,
    GradeToNumPipe, 
    StudentsGradesAveragePipe,
    AveragePipe],
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule, ReactiveFormsModule, FormsModule],
  exports: [StudentGradeComponent],
})
export class StudentGradeModule {}
