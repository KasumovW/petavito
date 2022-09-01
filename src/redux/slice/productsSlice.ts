import { createSlice } from "@reduxjs/toolkit"

export interface ICounter {
    products: any,
    loading: null | boolean,
    error: null | boolean,
}

const initialState: ICounter = {
    products: [],
    loading: null,
    error: null,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})


export const {  } = productsSlice.actions
export default productsSlice.reducer