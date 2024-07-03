interface Teacher {
  readonly firstName: string
  readonly lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  location: string
  [propName: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}


interface printTeacher {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacher = (firstName: string, lastName: string) => {
  const result = firstName.charAt(0) + '.' + ' ' + lastName

  return result
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface
}

interface StudentClassInterface {
  workOnHomework(): string
  displayName(): string
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, lastName: string) {}
  workOnHomework(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstName
  }
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}
console.log(director1)