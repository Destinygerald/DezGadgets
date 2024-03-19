import { createSlice } from "@reduxjs/toolkit";

const SliderSlice = createSlice({
	name: 'slider',
	initialState: { value: { open: false } },
	reducers: {
		sliderToggle: ( state, action ) => {
			state.value = action.payload
		}
	}
})

export const { sliderToggle } = SliderSlice.actions

export default SliderSlice.reducer;