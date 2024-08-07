// task_4/js/subjects/Java.ts
import { SubjectSubjects } from './Subject'

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number
  }

  export class Java extends SubjectSubjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java'
    }

    getAvailableTeacher(): string {
      if (
        !this.teacher ||
        this.teacher.experienceTeachingJava === undefined ||
        this.teacher.experienceTeachingJava <= 0
      ) {
        return 'No available teacher'
      }
      return `Available Teacher: ${this.teacher.firstName}`
    }
  }
}

export { Subjects as JavaSubjects }
