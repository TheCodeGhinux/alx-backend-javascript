// task_4/js/subjects/index.ts
import { Subjects } from './Teacher'
import { CppSubjects } from './Cpp'
import { JavaSubjects } from './Java'
import { ReactSubjects } from './React'

const cpp = new CppSubjects.Cpp()
const java = new JavaSubjects.Java()
const react = new ReactSubjects.React()

const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
}

cpp.setTeacher = cTeacher
java.setTeacher = cTeacher
react.setTeacher = cTeacher
