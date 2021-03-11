import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Lesson } from '../lesson';
import { LESSONS } from '../mock-lessons';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit, DoCheck, OnChanges {
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
  ngOnChanges(changes: SimpleChanges): void {
    changes
  }

  sendLessonForm(): void {

    let lesson: Lesson = new Lesson();
    lesson.date = this.lessonSendForm.get("id").value;
    lesson.date = this.lessonSendForm.get("date").value;
    lesson.theme = this.lessonSendForm.get("theme").value
    lesson.homework = this.lessonSendForm.get("homework").value
    lesson.note = this.lessonSendForm.get("note").value
    this.lessons.push(lesson)

    console.log(this.lessonSendForm);
  }

  deleteLesson(i: number){
    this.lessons.splice(i, 1);
  }

  editLesson(id: number){
    
  }



  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
   
  }


}
