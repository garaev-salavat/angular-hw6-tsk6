import { Component, OnInit } from '@angular/core';
import { Grade } from '../grades';
import { Lesson } from '../lesson';
import { LESSONS, STUDENT, STUDENT_GRADE } from '../mock-lessons';
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
  studentsGrades: StudentGrade[] = STUDENT_GRADE;
  grades: Grade[] = new Array<Grade>();

  constructor() {}

  ngOnInit(): void {
    this.gradeView();
  }

  gradeView() {
    for (let i = 0; i < this.students.length; i++) {
      this.grades[i] = new Grade();
      let temp;
      for (let j = 0; j < this.lessons.length; j++) {
        for (let o = 0; o < this.studentsGrades.length; o++) {
          if (
            this.lessons[j].id === this.studentsGrades[o].lessonId &&
            this.students[i].id === this.studentsGrades[o].studentId
          ) {
            temp = this.studentsGrades[o];
          }
        }
        this.grades[i].grades[j] = temp;
      }
      this.grades[i].student = this.students[i];
    }
  }
}
