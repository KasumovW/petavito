import { createSlice } from '@reduxjs/toolkit';

interface IItems {
	totalPrice: number;
	items: any;
}

const initialState: any = {
	totalPrice: 0,
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart: (state, action) => {
			const findItem = state.items.find((element: any) => element.id === action.payload.id);

			!findItem
				? state.items.push({
						...action.payload,
						count: 1,
				  })
				: findItem.count++;

			state.totalPrice = state.items.reduce((sum: number, element: any) => {
				return element.price * element.count + sum;
			}, 0);
		},
		minusCart: (state, action) => {
			const findItem = state.items.find((element: any) => element.id === action.payload);
			findItem && findItem.count--;
		},
		removeCart: (state, action) => {
			state.items = state.items.filter((element: any) => element.id !== action.payload.id);
		},
		clearCart: (state) => {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export default cartSlice.reducer;
export const { addCart, removeCart, minusCart, clearCart } = cartSlice.actions;
