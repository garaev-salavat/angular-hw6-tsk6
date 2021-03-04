import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentGradeModule } from './student-grade/student-grade.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentGradeModule,
    BrowserAnimationsModule,
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
