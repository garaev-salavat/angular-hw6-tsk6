import { Pipe, PipeTransform } from '@angular/core';
import { StudentGrade } from './student-grade';

@Pipe({
  name: 'average',
})
export class AveragePipe implements PipeTransform {
  transform(value: number[]): any {
    let studAverage: number = 0;
    let element: number = 0;
    for (let index = 0; index < value.length; index++) {
      element = element + value[index];
    }
    return element / value.length;
  }
}
