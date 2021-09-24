import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	title: null,
	subTitle: null,
	cInfo:[],
	// cInfo:[
	// 	{
	// 		name: "총합",
	// 		desc: "99900건"
	// 	},
	// 	{
	// 		name: "신청",
	// 		desc: "100건"
	// 	},
	// 	{
	// 		name: "접수",
	// 		desc: "400건"
	// 	},
	// 	{
	// 		name: "보류",
	// 		desc: "10건"
	// 	},
	// 	{
	// 		name: "취소",
	// 		desc: "0건"
	// 	},
	// 	{
	// 		name: "완료",
	// 		desc: "1000건"
	// 	},
	// ],
	step: [],
	// step:[
	// 	{
	// 		num: 1,
	// 		name: "시상 이벤트",
	// 		state: "done"
	// 	},
	// 	{
	// 		num: 2,
	// 		name: "시상 이벤트 설정",
	// 		state: "on"
	// 	},
	// 	{
	// 		num: 3,
	// 		name: "시상 이벤트 완료",
	// 		state: ""
	// 	},
	// ],
}

export const SummarySlick = createSlice({
	name: "action",
	initialState,
	reducers:{
		setSummary: (state, action) => {
			state.title = action.payload.title;
			state.subTitle = action.payload.subTitle;
			state.cInfo = action.payload.cInfo !== undefined ? action.payload.cInfo : [];
			state.step = action.payload.step !== undefined ? action.payload.step : [];
		},
	}
});

export const getTitle = (state) => state.summary.title;
export const getSubTitle = (state) => state.summary.subTitle;
export const getCInfo = (state) => state.summary.cInfo;
export const getStep = (state) => state.summary.step;

export const { setSummary } = SummarySlick.actions;

export default SummarySlick.reducer;