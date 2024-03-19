import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
	name: 'cart',
	initialState: { value : { opened: false } },
	reducers: {
		toggleCart: ( state, action ) => {
			state.value = action.payload
		}
	}
})

export const { toggleCart } = CartSlice.actions

export default CartSlice.reducer;