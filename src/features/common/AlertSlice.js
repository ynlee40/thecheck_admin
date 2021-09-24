import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	on: false, 
	html: "",
	toMain: false
}

export const AlertSlice = createSlice({
	name: "Massage",
	initialState,
	reducers:{
		toggleAlert: (state, action) => {
			state.on = !state.on;
			if (action.payload === undefined) {
				state.on = false; 
				return;
			}
			state.html = action.payload.html !== undefined ? action.payload.html : "";
			state.toMain = action.payload.toMain || false;
		},
	}
});

export const getAlert = (state) => state.alert; 

export const { toggleAlert } = AlertSlice.actions;

export default AlertSlice.reducer;