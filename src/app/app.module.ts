import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentGradeModule } from './student-grade/student-grade.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LessonsModule } from './lessons/lessons.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { StudentsModule } from './students/students.module';
import { GradesModule } from './grades/grades.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentGradeModule,
    BrowserAnimationsModule,
    LessonsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    StudentsModule,
    GradesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
