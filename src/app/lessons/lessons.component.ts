import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Lesson } from '../lesson';
import { LESSONS } from '../mock-lessons';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[] = LESSONS;

  lessonSendForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.lessonSendForm = fb.group({
      date: fb.control(Date),
      theme: fb.control(''),
      homework: fb.control(''),
      note: fb.control(''),
    });
  }

  sendLessonForm(): void {
    console.log(this.lessonSendForm);
  }

  ngOnInit(): void {}
}
