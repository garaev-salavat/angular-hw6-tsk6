import { Student } from "./student";
import { StudentGrade } from "./student-grade";

export class Grade {
  id: number;
  student: Student = new Student();
  grades: StudentGrade[] = new Array<StudentGrade>();
  averageGrade: number;
}
