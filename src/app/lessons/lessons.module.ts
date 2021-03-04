import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [LessonsComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [LessonsComponent, 
    MatFormFieldModule, 
    MatCardModule,
    MatButtonModule]
})
export class LessonsModule { }
