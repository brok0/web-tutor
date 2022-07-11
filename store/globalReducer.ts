import { createSlice } from "@reduxjs/toolkit";
import type { AppState} from './store'

export interface GlobalState {
  baseServiceUrl: string
}

const initialState = {
	baseServiceUrl:'http://localhost:3000/api'
};


export const globalSlice = createSlice({
	name: "global",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		
	},
});

export const getServiceUrl = (state: AppState) => state.global.baseServiceUrl;

export default globalSlice.reducer;

