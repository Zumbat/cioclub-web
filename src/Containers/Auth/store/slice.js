import {
	createSlice
} from '@reduxjs/toolkit';


const authSlice = createSlice({
	name: 'auth',
	initialState: {
		error: null,
		user: {},
		token: null,
		isLogin: false,
	},
	reducers: {
		signIn: () => ({
			error: null,
		}),
		setUser: (state, action) => ({
			user: action.payload.user,
			token: action.payload.token,
			error: null,
			isLogin: true
		}),
		setError: (state, action) => ({
			user: {},
			error: 'Email o password sbagliata',
		}),
		logOut() { },
		logOutSuccess: () => ({
			user: {},
			error: null,
			isLogin: false
		}),
	},
});

export default authSlice;

export const { actions, reducer } = authSlice;


