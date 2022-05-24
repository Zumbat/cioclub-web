import {
	createSlice
} from '@reduxjs/toolkit';

const errorSlice = createSlice({
	name: 'error',
	initialState: {
		error: null
	},
	reducers: {
		setError: (state, action) => ({
			error: action.payload
		}),
		clearError: state => ({
			error: null
		})
	}
});

export const { actions, reducer } = errorSlice;
