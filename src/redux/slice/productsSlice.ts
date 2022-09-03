import { createSlice } from "@reduxjs/toolkit"

interface ISortType {
    name: string,
    sortProperty: string,
    id: number,
}

interface ICounter {
    categoryId: number,
    searchValue: string,
    sortType: ISortType,
    page: number,
}

const initialState: ICounter = {
    categoryId: 0,
    searchValue: '',
    sortType: {
        name: 'Рейтинг',
        sortProperty: 'rating',
        id: 1,
    },
    page: 1,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeCategoryId: (stata, action) => {
            stata.categoryId = action.payload;
        },
        changeSortType: (stata, action) => {
            stata.sortType = action.payload;
        },
        changeSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        changePage: (state, action) => {
            state.page = action.payload;
        }
    }
})


export const { changeCategoryId, changeSortType, changeSearchValue, changePage } = productsSlice.actions;
export default productsSlice.reducer;