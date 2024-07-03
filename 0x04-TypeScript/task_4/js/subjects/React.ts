// task_4/js/subjects/React.ts
import { SubjectSubjects } from './Subject'

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number
  }

  export class React extends SubjectSubjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React'
    }

    getAvailableTeacher(): string {
      if (
        !this.teacher ||
        this.teacher.experienceTeachingReact === undefined ||
        this.teacher.experienceTeachingReact <= 0
      ) {
        return 'No available teacher'
      }
      return `Available Teacher: ${this.teacher.firstName}`
    }
  }
}

export { Subjects as ReactSubjects }
