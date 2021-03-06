import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
