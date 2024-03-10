import {configureStore} from "@reduxjs/toolkit"
import {toDoReducer} from "./toDoReducer"

export const store = configureStore({reducer: toDoReducer})