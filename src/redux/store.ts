import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import productsReducer from './slice/productsSlice'

const rootReducer = combineReducers({
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(productsApi.middleware)
},)


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>