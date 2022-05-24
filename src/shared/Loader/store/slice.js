import {
	createSlice
} from '@reduxjs/toolkit';


const loaderSlice = createSlice({
	name: 'loader',
	initialState: {
		loading: 0
	},
	reducers: {
		startLoader: state => ({
			loading: state.loading + 1
		}),
		stopLoader: state => ({
			loading: state.loading - 1
		})
	}
});

export const { actions, reducer } = loaderSlice;
