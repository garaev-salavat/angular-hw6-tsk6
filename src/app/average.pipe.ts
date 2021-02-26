import { Pipe, PipeTransform } from '@angular/core';
import { StudentGrade } from './student-grade';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(studentsGrade: StudentGrade[], studentId: number): any {
    let studAverage: number = 0;
let element: number = 0;
    for (let index = 0; index < studentsGrade.length; index++) {
      element = element + studentsGrade[index].studentGrade;
      
    }

      // if (element.studentId === studentId) {
      //   studAverage = studAverage + element.studentGrade;
      // }
    // });

    return element; 
  }

}
