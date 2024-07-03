interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const first: Student = {
  firstName: "Ayo",
  lastName: "Ghajini",
  age: 21,
  location: "Nigeria"
}

const second: Student = {
  firstName: "Code",
  lastName: "Ghinux",
  age: 23,
  location: "Germany"
}

const studentsList: Student[] = [first, second]

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document
    .getElementById('studentTable')
    ?.getElementsByTagName('tbody')[0]

  if (tableBody) {
    studentsList.forEach((student) => {
      const row = document.createElement('tr')

      const firstNameCell = document.createElement('td')
      firstNameCell.textContent = student.firstName
      row.appendChild(firstNameCell)

      const locationCell = document.createElement('td')
      locationCell.textContent = student.location
      row.appendChild(locationCell)

      tableBody.appendChild(row)
    })
  }
})