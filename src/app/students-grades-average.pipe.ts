import { Pipe, PipeTransform } from '@angular/core';
import { StudentGrade } from './student-grade';
import {MatMenuModule} from '@angular/material/menu';

@Pipe({
  name: 'studentsGradesAverage',
})
export class StudentsGradesAveragePipe implements PipeTransform {
  

  transform(value: StudentGrade[]): any {
    let result: number[] = new Array();
    let addNum: number;
    for (let i: number = 0; i < value.length; i++) {
      result[i] = this.getNum(value[i]);
    }
    return this.getAverage(result);
  }

  getNum(value: StudentGrade): number {
    if (value == null) {
      return 0;
    } else {
      return value.grade;
    }
  }

  getAverage(value: number[]): number {
    let element: number = 0;
    for (let index = 0; index < value.length; index++) {
      element = element + value[index];
    }
    return element / value.length;
  }
}
