import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState, AppThunk } from './store'

export interface GlobalState {
  baseServiceUrl: string
  user : Object
}

const initialState = {
	user : {},
	baseServiceUrl:'http://localhost:3000/api'
};


export const userSlice = createSlice({
	name: "user",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setUser: (state,action) => {
			//todo : make request to db to get user id
			console.log(action)
			state.user = action.payload
		}
		
	},
});

export const { setUser } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: AppState) => state.user;

export default userSlice.reducer;

