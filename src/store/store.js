import { configureStore } from '@reduxjs/toolkit';

import eventReducer from '../features/event';
import userReducer from '../features/user';

export const store = configureStore({
	reducer: {
		user: userReducer,
		event: eventReducer,
	},
});

export default store.reducer;
