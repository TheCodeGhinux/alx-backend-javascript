import { RowID, RowElement } from './interface'
import * as CRUD from './crud'

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

// Create a const variable named newRowID with the type RowID and assign the value from the insertRow command
const newRowID: RowID = CRUD.insertRow(row)
console.log(`New row ID: ${newRowID}`)

// Create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
}
