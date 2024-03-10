import {v4 as uuidv4} from 'uuid'
import {createReducer} from "@reduxjs/toolkit"
import {initialStateToDoReducer} from "./initialStateToDoReducer"
import {
  ADD_ITEM,
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_CURRENT,
  NEW_ITEM,
  SET_LENGTH_ERROR,
  SWITCH_STATUS
} from "./actions"

export const toDoReducer = createReducer(initialStateToDoReducer, builder => {
  builder
    .addCase(NEW_ITEM, (state, action) => {
      state.newItem = action.payload
    })
    .addCase(ADD_ITEM, (state, action) => {
      state.newItem = ''
      if (action.payload.length) {
        if (action.payload.length < 6) {
          state.lengthError = false
          state.allItems = [{id: uuidv4(), itemName: action.payload, completed: false}, ...state.allItems]
          state.toDoItems = [...state.allItems]
          state.totalCurrent = [...state.allItems]
        } else {
          state.lengthError = true
        }
      }
    })
    .addCase(SWITCH_STATUS, (state, action) => {
      state.allItems.forEach(item => {
        if (item.id === action.payload.id) item.completed = !item.completed
      })
      state.toDoItems = [...state.allItems]
      state.totalCompleted = state.allItems.filter(item => item.completed === true)
      state.totalCurrent = state.allItems.filter(item => item.completed === false )
    })
    .addCase(FILTER_ALL, (state) => {
      state.toDoItems = [...state.allItems]
    })
    .addCase(FILTER_COMPLETED, (state) => {
      state.toDoItems = state.allItems.filter(item => item.completed)
    })
    .addCase(FILTER_CURRENT, (state) => {
      state.toDoItems = state.allItems.filter(item => !item.completed)
    })
    .addCase(SET_LENGTH_ERROR, state => {
      state.lengthError = false
    })
})