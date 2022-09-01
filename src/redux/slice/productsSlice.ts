import { createSlice } from "@reduxjs/toolkit"

interface ISortType {
    name: string,
    sortProperty: string,
    id: number,
}

interface ICounter {
    categoryId: number,
    sortType: ISortType,
};

const initialState: ICounter = {
    categoryId: 0,
    sortType: {
        name: 'Рейтинг',
        sortProperty: 'rating',
        id: 1,
    },
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeCategoryId: (stata, action) => {
            stata.categoryId = action.payload;
        },
        changeSortType: (stata, action) => {
            stata.sortType = action.payload;
        }
    }
})


export const { changeCategoryId, changeSortType } = productsSlice.actions;
export default productsSlice.reducer;