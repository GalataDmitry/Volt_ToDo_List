import {store} from "./store"
import {toDoReducer} from "./toDoReducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof toDoReducer>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
