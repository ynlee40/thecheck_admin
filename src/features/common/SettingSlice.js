import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	title: "THE CHECK",
	layoutOn : true,
}

export const SettingSlice = createSlice({
	name: "setting",
	initialState,
	reducers:{
		setTitle: (state, action) => {
			state.title = action.payload;
		},
		setLayoutOn:  (state, action) => { //레이아웃 사용 안하는 페이지에 사용
			state.layoutOn = action.payload;
		},
	}
});

export const getTitle = (state) => state.setting.title;

export const getLayoutOn = (state) => state.setting.layoutOn;

export const { setTitle, setLayoutOn } = SettingSlice.actions;

export default SettingSlice.reducer;