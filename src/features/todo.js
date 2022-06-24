// import { createSlice } from '@reduxjs/toolkit';

// 
// // import { getEvents } from './selectors';

// export const eventSlice = createSlice({
// 	name: 'event',
// 	initialState: {
// 		value: {
// 			listEventi: [
// 				{
// 					idEvento: '',
// 					nome: '',
// 					descrizione: '',
// 					data: '',
// 					status: '',
// 					imgCopertina: '',
// 					isOnline: '',
// 					indirizzo: '',
// 					link: '',
// 					disable: '',
// 					created_at: '',
// 				},
// 			],
// 		},
// 	},
// 	reducers: {
// 		setEvents: (state, action) => {
// 			state.data.push(action.payload);
// 		},
// 	},
// });

// export const setEventsAsync = data => async dispatch => {
// 	try {
// 		const response = await api.get('/listEventi');
// 		dispatch(setEvents(response.data));
// 	} catch (err) {
// 		throw new Error(err);
// 	}

// 	// dispatch(getEvents(response.value));
// };

// export const { setEvents } = eventSlice.actions;
// export const showEvent = state => state.event.data;
// export default eventSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import api from '../API';

export const todoSlide = createSlice({
	name: 'todo',
	initialState: {
		data: [],
	},
	reducers: {
		addTodo: (state, action) => {
			state.data.push(action.payload);
		},
		getTodo: (state, action) => {
			state.data = [action.payload];
		},
	},
});

export const getTodoAsync = () => {
	
		const response = api.get("./listEventi");
		dispatch(getTodo(response.data));
		console.log("response:", response)
	
};

// export const addTodoAsync = data => async dispatch => {
// 	try {
// 		// console.log(data);
// 		const response = await axios.post(API_URL, data);
// 		// console.log(response);
// 		dispatch(addTodo(response.data));
// 	} catch (err) {
// 		throw new Error(err);
// 	}
// };

export const { addTodo, getTodo } = todoSlide.actions;
export const showTodo = state => state.todo.data;
export default todoSlide.reducer;
