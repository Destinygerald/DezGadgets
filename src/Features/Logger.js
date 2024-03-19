import { createSlice } from "@reduxjs/toolkit";

const LoggerSlice = createSlice({
	name: "logger",
	initialState: { value : { opened: false, page: "login" } },
	reducers: {
		toggle: ( state, action ) => {
			state.value = action.payload
		}
	}
})

export const { toggle } = LoggerSlice.actions

export default LoggerSlice.reducer;