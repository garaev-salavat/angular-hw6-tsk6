import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
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
export class StudentGradeComponent implements OnInit, OnChanges {
  students: Student[] = STUDENT;
  lessons: Lesson[] = LESSONS;
  studentsGrades: StudentGrade[] = STUDENT_GRADE;
  grades: Grade[] = new Array<Grade>();


  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  gradeSendForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.gradeSendForm = fb.group({
      studentId: fb.control(0),
      lessonId: fb.control(0),
      grade: fb.control(0),
    });
     }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  sendGradeForm(): void {
    let studentGrade: StudentGrade = new StudentGrade();
    studentGrade.studentId = this.gradeSendForm.get('studentId').value;
    studentGrade.lessonId = this.gradeSendForm.get('lessonId').value;
    studentGrade.grade = this.gradeSendForm.get('grade').value;
    this.studentsGrades.push(studentGrade);

    console.log(this.gradeSendForm);
  }

  ngOnInit(): void {
    this.gradeView();
  }

  someMethod() {
    this.trigger.openMenu();
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

  gradeQq(e: number, i: number,j: number, studentsGrades: StudentGrade ){
    this.grades[i].grades[j].grade = e;
    
    this.gradeView();
    console.log('===', e, i, j, studentsGrades)
  }
}
