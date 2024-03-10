import {createAction} from "@reduxjs/toolkit"

interface SwitchStatusTypes {
  id: string
  completed: boolean
}

export const NEW_ITEM = createAction<string>('newItem')
export const ADD_ITEM = createAction<string>('addItem')
export const SWITCH_STATUS = createAction<SwitchStatusTypes>('switchStatus')
export const FILTER_ALL = createAction('filterAll')
export const FILTER_COMPLETED = createAction('filterCompleted')
export const FILTER_CURRENT = createAction('filterCurrent')
export const SET_LENGTH_ERROR = createAction('setLengthError')