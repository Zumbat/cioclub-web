// // import { createSlice } from '@reduxjs/toolkit';

// //
// // // import { getEvents } from './selectors';

// // export const eventSlice = createSlice({
// // 	name: 'event',
// // 	initialState: {
// // 		value: {
// // 			listEventi: [
// // 				{
// // 					idEvento: '',
// // 					nome: '',
// // 					descrizione: '',
// // 					data: '',
// // 					status: '',
// // 					imgCopertina: '',
// // 					isOnline: '',
// // 					indirizzo: '',
// // 					link: '',
// // 					disable: '',
// // 					created_at: '',
// // 				},
// // 			],
// // 		},
// // 	},
// // 	reducers: {
// // 		setEvents: (state, action) => {
// // 			state.data.push(action.payload);
// // 		},
// // 	},
// // });

// // export const setEventsAsync = data => async dispatch => {
// // 	try {
// // 		const response = await api.get('/listEventi');
// // 		dispatch(setEvents(response.data));
// // 	} catch (err) {
// // 		throw new Error(err);
// // 	}

// // 	// dispatch(getEvents(response.value));
// // };

// // export const { setEvents } = eventSlice.actions;
// // export const showEvent = state => state.event.data;
// // export default eventSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import api from '../API';

// export const todoSlide = createSlice({
// 	name: 'todo',
// 	initialState: {
// 		value: [],
// 	},
// 	reducers: {
// 		addTodo: (state, action) => {
// 			state.value.push(action.payload);
// 		},
// 		getTodo: (state, action) => {
// 			state.value = [action.payload];
// 		},
// 	},
// });

// export const getTodoAsync = (value) = async (dispatch) => {
// 	try {
// 		const response = await api.get("./listEventi");
// 		dispatch(getTodo(response.value));
// 		console.log(response)
// 	} catch (err) {
// 		throw new Error(err);
// 	}
// };

// // export const addTodoAsync = data => async dispatch => {
// // 	try {
// // 		// console.log(data);
// // 		const response = await axios.post(API_URL, data);
// // 		// console.log(response);
// // 		dispatch(addTodo(response.data));
// // 	} catch (err) {
// // 		throw new Error(err);
// // 	}
// // };

// export const { addTodo, getTodo } = todoSlide.actions;
// export const showTodo = state => state.todo.data;
// export default todoSlide.reducer;

import { createSlice } from "@reduxjs/toolkit";
import api from "../API";

export const todoSlide = createSlice({
  name: "todo",
  initialState: {
    data: {
      listEventi: [
        {
          idEvento: "1",
          nome: "1",
          descrizione: "",
          data: "",
          status: "",
          imgCopertina: "",
          isOnline: "",
          indirizzo: "",
          link: "",
          disable: "",
          created_at: "",
        },
        {
          idEvento: "2",
          nome: "2",
          descrizione: "",
          data: "",
          status: "",
          imgCopertina: "",
          isOnline: "",
          indirizzo: "",
          link: "",
          disable: "",
          created_at: "",
        },
      ],
    },
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(state, action);
      state.data.listEventi.push(action.payload);
      console.log("dsadaws");
    },
    getTodo: (state, action) => {
      state.data = [action.payload];
    },
  },
});

// export const getTodoAsync = (data) => async (dispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}/${data}`);
//     dispatch(getTodo(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const addTodoAsync = () => async (dispatch) => {
  try {
    const response = await api.get("/listEventi");
    console.log(response);
    dispatch(addTodo(response.data.listEventi));
  } catch (err) {
    throw new Error(err);
  }
};

export const { addTodo, getTodo } = todoSlide.actions;
export const showTodo = (state) => state.todo.data;
export default todoSlide.reducer;
