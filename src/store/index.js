import { configureStore } from "@reduxjs/toolkit";
import SettingReducer from "features/common/SettingSlice";
import GnbReducer from "features/common/GnbSlice";
import AlertReducer from "features/common/AlertSlice";
import SummaryReducer from "features/common/SummarySlick";
import PaginateReducer from "features/common/PaginateSlice";

export const store = configureStore({
	reducer: {
		setting: SettingReducer,
		gnb: GnbReducer,
		alert: AlertReducer,
		summary: SummaryReducer,
		paginate: PaginateReducer,
	},
});  
