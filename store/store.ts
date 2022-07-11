import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userReducer from "./userReducer";
import globalSlice from "./globalReducer";

export function makeStore() {
	return configureStore({
		reducer: { 
			global: globalSlice,
			user: userReducer 
		},
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

export default store;
