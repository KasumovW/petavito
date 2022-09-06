import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import productsReducer from './slice/productsSlice'
import itemsReducer from './slice/cartSlice'

const rootReducer = combineReducers({
    products: productsReducer,
    cartItems: itemsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(productsApi.middleware)
},)


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>