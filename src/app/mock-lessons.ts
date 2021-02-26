import { Lesson } from './lesson';
import { Student } from './student';
import { StudentGrade } from './student-grade';

export const LESSONS: Lesson[] = [
  {
    lessonId: 1,
    lessonDate: new Date(2021, 1, 16),
    lessonTheme: 'Привязка данных',
    lessonHomework: 'Домашнее задание на тему привязки данных',
    lessonNote: 'Примечания к уроку по привязке данных',
  },
  {
    lessonId: 2,
    lessonDate: new Date(2021, 1, 23),
    lessonTheme: 'Компоненты',
    lessonHomework: 'Домашнее задание на тему Компоненты',
    lessonNote: 'Примечания к уроку по Компоненты',
  },
  {
    lessonId: 3,
    lessonDate: new Date(2021, 1, 30),
    lessonTheme: 'Директивы',
    lessonHomework: 'Домашнее задание на тему Директивы',
    lessonNote: 'Примечания к уроку по Директивы',
  },
  {
    lessonId: 4,
    lessonDate: new Date(2021, 2, 6),
    lessonTheme: 'Жизненный цикл',
    lessonHomework: 'Домашнее задание на тему Жизненный цикл',
    lessonNote: 'Примечания к уроку по Жизненный цикл',
  },
];

export const STUDENT: Student[] = [
  {
    studentId: 1,
    studentFirstName: 'Иван',
    studentLastName: 'Иванов',
  },
  {
    studentId: 2,
    studentFirstName: 'Георгий',
    studentLastName: 'Паравозов',
  },
  {
    studentId: 3,
    studentFirstName: 'Ксения',
    studentLastName: 'Павлова',
  },
  {
    studentId: 4,
    studentFirstName: 'Роман',
    studentLastName: 'Горбунов',
  },
  {
    studentId: 5,
    studentFirstName: 'Андрей',
    studentLastName: 'Орлов',
  },
];

export const GRADE: StudentGrade[] = [
  {
    lessonId: 1,
    studentId: 1,
    studentGrade: 3,
  },
  {
    lessonId: 2,
    studentId: 1,
    studentGrade: 5,
  },
  {
    lessonId: 3,
    studentId: 1,
    studentGrade: 1,
  },
  {
    lessonId: 4,
    studentId: 1,
    studentGrade: 3,
  },
  {
    lessonId: 1,
    studentId: 2,
    studentGrade: 4,
  },
  {
    lessonId: 2,
    studentId: 2,
    studentGrade: 1,
  },
  {
    lessonId: 3,
    studentId: 2,
    studentGrade: 2,
  },
  {
    lessonId: 4,
    studentId: 2,
    studentGrade: 3,
  },
  {
    lessonId: 1,
    studentId: 3,
    studentGrade: 5,
  },
  {
    lessonId: 2,
    studentId: 3,
    studentGrade: 5,
  },
  {
    lessonId: 3,
    studentId: 3,
    studentGrade: 4,
  },
  {
    lessonId: 4,
    studentId: 3,
    studentGrade: 3,
  },
  {
    lessonId: 1,
    studentId: 4,
    studentGrade: 2,
  },
  {
    lessonId: 2,
    studentId: 4,
    studentGrade: 1,
  },
  {
    lessonId: 3,
    studentId: 4,
    studentGrade: 1,
  },
  {
    lessonId: 4,
    studentId: 4,
    studentGrade: 5,
  },
  {
    lessonId: 1,
    studentId: 5,
    studentGrade: 4,
  },
  {
    lessonId: 2,
    studentId: 5,
    studentGrade: 3,
  },
  {
    lessonId: 3,
    studentId: 5,
    studentGrade: 2,
  },
  {
    lessonId: 4,
    studentId: 5,
    studentGrade: 5,
  },
];
