import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userReducer from "./appReducer";

export function makeStore() {
	return configureStore({
		reducer: { user: userReducer },
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
