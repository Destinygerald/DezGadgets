import { createSlice } from "@reduxjs/toolkit"

function add_to_cart ( state, action ) {

	if ( state.value?.carted?.length == 0 || !state.value?.carted.some(item => ( item.name == action.payload.name )) ) {
		state.value.carted.push({ name: action.payload.name, quantity: 1, price: action.payload.price })
		return;
	}



	state.value?.carted?.forEach(cartItem => {
		if (cartItem?.name == action.payload.name) {
			cartItem.quantity++;
			return;
		}
	})
}


function remove_from_cart ( state, action ) {

	if (state.value?.carted?.length == 0) {
		return;
	}

	state.value.carted = state.value?.carted?.filter(cartItem => (
		cartItem.name != action.payload.name
	))
}

function minus_from_cart ( state, action ) {

	if (state.value?.carted?.length == 0) {
		return;
	}

	state.value?.carted?.forEach(cartItem => {
		if (cartItem?.name == action.payload.name) {

			if ( cartItem?.quantity == 1 ) {
				state.value.carted = state.value?.carted?.filter(cartItem => (
					cartItem.name != action.payload.name
				))
				return;
			} 

			cartItem.quantity--;
			return;
		} 
	})
}

const cartSlice = createSlice({
	name: "collections",
	initialState: { value: { carted: [] } },
	reducers: {
		addToCart: add_to_cart,
		minusFromCart: minus_from_cart,
		removeFromCart: remove_from_cart
	}
})

export default cartSlice.reducer

export const { addToCart, minusFromCart, removeFromCart } = cartSlice.actions