export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

const printTeacher = (firstName, lastName) => {
  const result = firstName.charAt(0) + "." + " " + lastName

  return result
}

console.log(printTeacher("John", "Doe"))
