import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/couterSlice'

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = configureStore({
    reducer: rootReducer
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>