import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	gnbBoolean: false,
	menu: [
		{
			name : "Index",
			dep2 : null,
			link : "/projectInfo", 
			on : "", 
		},
		{
			name : "module",
			dep2 : null,
			link : "/module", 
			on : "", 
		},
		{
			name : "layout",
			dep2 : null,
			link : "/layout", 
			on : "", 
		},
		{
			name : "메뉴1",
			dep2 : [
				{
					name: "메뉴1 - 서브1",
					link: "#"
				},
				{
					name: "메뉴1 - 서브2",
					link: "#"
				},
				{
					name: "메뉴1 - 서브3",
					link: "#"
				},
				{
					name: "메뉴1 - 서브4",
					link: "#"
				},
			],
			link : null,
			on : "", 
		},
		{
			name : "메뉴2",
			dep2 : null,
			link : "#", 
			on : "", 
		},
		{
			name : "메뉴3",
			dep2 : [
				{
					name: "메뉴3 - 서브1",
					link: "#"
				},
				{
					name: "메뉴3 - 서브2",
					link: "#"
				},
				{
					name: "메뉴3 - 서브3",
					link: "#"
				},
				{
					name: "메뉴3 - 서브4",
					link: "#"
				},
			],
			link : null,
			on : "", 
		},
	]
}

export const GnbSlice = createSlice({
	name: "gnb",
	initialState,
	reducers:{
		gnbToggle: (state, action) => {
			state.gnbBoolean = action.payload;
		},
		menuToggle: (state, action) => {
			const i = action.payload;
			const target = state.menu[i].on ;
			state.menu.map(item => item.on = "");
			state.menu[i].on = target === "" ? "on" : "";
		}
	}
});

export const getGnbBoolean = (state) => state.gnb.gnbBoolean;
export const getAlertBoolean = (state) => state.gnb.alertBoolean;
export const getMenu = (state) => state.gnb.menu;

export const { gnbToggle, menuToggle } = GnbSlice.actions;

export default GnbSlice.reducer;