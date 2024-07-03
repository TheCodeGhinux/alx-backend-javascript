// import { Teacher } from './Teacher'
// task_4/js/subjects/Subject.ts
// import { Subjects as ST } from './Teacher'

namespace Subjects {
  export class Subject {
    teacher: Teacher

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher
    }
  }
}

export { Subjects as SubjectSubjects }
