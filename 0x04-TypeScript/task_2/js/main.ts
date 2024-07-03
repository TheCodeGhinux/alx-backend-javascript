interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }

  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher()
  } else {
    return new Director()
  }
}

// Type predicate function to check if an employee is a Director
const  isDirector = (employee: Director | Teacher): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
const executeWork = (employee: Director | Teacher): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Define a string literal type Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on today's subject
const teachClass = (todayClass: Subjects): string => {
    switch (todayClass) {
        case 'Math':
            return 'Teaching Math';
        case 'History':
            return 'Teaching History';
        default:
            throw new Error('Invalid subject');
    }
};