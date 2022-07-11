import {createSlice } from "@reduxjs/toolkit";
import type { AppState } from './store'

export interface GlobalState {
  baseServiceUrl: string
  user : Object
}

const initialState = {
	userData : {},
};


export const userSlice = createSlice({
	name: "user",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setUser: (state,action) => {
			//todo : make request to db to get user id
			state.userData = action.payload
		}
	},
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: AppState) => state.user.userData;

export default userSlice.reducer;

