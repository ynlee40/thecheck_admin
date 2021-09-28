import { createSlice } from "@reduxjs/toolkit";
const initialState ={
	page : {
		onIndex : 1-1,
		prev: false,
		next: true,
		start : 1,
		end : 10,
		type: "", //type2
		info: "", //false, true
	}
}

const PaginateSlice = createSlice({
	name: "paginate",
	initialState,
	reducers:{
		setPage: (state, action) => {
			state.page.onIndex = action.payload.onIndex === undefined ? state.page.onIndex : action.payload.onIndex-1;
			state.page.prev = action.payload.prev || state.page.prev;
			state.page.next = action.payload.next || state.page.next;
			state.page.start = action.payload.start || state.page.start;
			state.page.end = action.payload.end || state.page.end;
			state.page.type = action.payload.type || "";
			state.page.info = action.payload.info || "";
		}
	}
});

export const getPaginate = (state) => state.paginate.page;

export const { setPage } = PaginateSlice.actions;

export default PaginateSlice.reducer;