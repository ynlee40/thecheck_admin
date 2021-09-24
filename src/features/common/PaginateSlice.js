import { createSlice } from "@reduxjs/toolkit";
const initialState ={
	page : {
		onIndex : 1-1,
		prev: false,
		next: true,
		start : 1,
		end : 10,
		type: "", //type2
		info: "",
	}
}

const PaginateSlice = createSlice({
	name: "paginate",
	initialState,
	reducers:{
		changePage: (state, action) => {
			state.onIndex = action.payload.onIndex-1;
			state.prev = action.payload.prev;
			state.next = action.payload.next;
			state.start = action.payload.start;
			state.end = action.payload.end;
			state.size = action.payload.size || "";
		}
	}
});

export const getPaginate = (state) => {
	return state.paginate.page;
};

export const { changePage } = PaginateSlice.actions;

export default PaginateSlice.reducer;