interface ToDoListTypes {
  id: string
  itemName: string
  completed: boolean
}

export const initialStateToDoReducer = {
  toDoItems: [] as ToDoListTypes[],
  allItems: [] as ToDoListTypes[],
  newItem: '',
  lengthError: false,
  totalCompleted: [] as ToDoListTypes[],
  totalCurrent: [] as ToDoListTypes[]
}