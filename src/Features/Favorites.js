import { createSlice } from "@reduxjs/toolkit"

function ToggleToFav ( state, action ) {
	if (!state.value?.favorites.some(item => ( item.name == action.payload.name )) ) {
		state.value.favorites.push({ name: action.payload.name, liked: true, price: action.payload.price })
		return;
	} else {
		state.value.favorites = state.value.favorites.filter(item => (
									item.name !== action.payload.name
								))
	}
}

const FavouriteSlice = createSlice({
	name: 'favorites',
	initialState: { value: { favorites: [] } },
	reducers: {
		toggleToFav: ToggleToFav
	}
})

export default FavouriteSlice.reducer;

export const { toggleToFav } = FavouriteSlice.actions