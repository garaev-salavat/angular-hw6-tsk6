import { Component, OnInit } from '@angular/core';
import { Grade } from '../grades';
import { Lesson } from '../lesson';
import { GRADE, LESSONS, STUDENT } from '../mock-lessons';
import { Student } from '../student';
import { StudentGrade } from '../student-grade';

@Component({
  selector: 'app-student-grade',
  templateUrl: './student-grade.component.html',
  styleUrls: ['./student-grade.component.css'],
})
export class StudentGradeComponent implements OnInit {
  students: Student[] = STUDENT;
  lessons: Lesson[] = LESSONS;
  studentsGrade: StudentGrade[] = GRADE;

  constructor() {}

  ngOnInit(): void {}

  getAverage(studentsGrade: StudentGrade[], studentId: number): number {
    let studAverage: number;

    studentsGrade;

    studentsGrade.forEach((element) => {
      if (element.studentId === studentId) {
        studAverage = studAverage + element.studentId;
      }
    });

    return studAverage;
  }

  // getAverage(studentsGrade: StudentGrade[], studentId: number): number {
  //   let studAverage: number;

  //   studentsGrade;

  //   studentsGrade.forEach((element) => {
  //     if (element.studentId === studentId) {
  //       studAverage = studAverage + element.studentGrade;
  //     }
  //   });

  //   return studAverage;
  // }
  // }
}
