import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { STUDENT } from '../mock-lessons';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = STUDENT;

  studentSendForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.studentSendForm = fb.group({
      firstName: fb.control(''),
      lastName: fb.control(''),
    });
  }

  sendStudentForm(): void {
    let student: Student = new Student();
    student.firstName = this.studentSendForm.get("firstName").value;
    student.lastName = this.studentSendForm.get("lastName").value
    this.students.push(student)
    console.log(this.students)
  }

  ngOnInit(): void {}
}