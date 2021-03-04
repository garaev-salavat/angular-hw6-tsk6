import { Pipe, PipeTransform } from '@angular/core';
import { StudentGrade } from './student-grade';

@Pipe({
  name: 'gradeToNum',
})
export class GradeToNumPipe implements PipeTransform {
  transform(value: StudentGrade): any {
    if (value == null) {
      return 0;
    } else {
      return value.grade;
    }
  }
}
