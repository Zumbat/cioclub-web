import { createSlice } from '@reduxjs/toolkit';

import api from '../API/index';

export const eventSlice = createSlice({
	name: 'event',
	initialState: {
		value: {
			listEventi: [
				{
					idEvento: '',
					nome: '',
					descrizione: '',
					data: '',
					status: '',
					imgCopertina: '',
					isOnline: '',
					indirizzo: '',
					link: '',
					disable: '',
					created_at: '',
				},
			],
		},
	},
	reducers: {
		add: (state, action) => {
			state.value = action.payload;
		},
		edit: (state, action) => {
			state.value = action.payload;
		},
		getEvents: state => {
			api
				.get('/listEventi')
				.then(response => {
					if (response.status === 200) {
						state.value = response.data;
					} else {
						console.log('bbbbbbbbb');
					}
				})
				.catch(err => {
					console.log('aaaaaa');
				});
		},
	},
});

export const { getEvents } = eventSlice.actions;

export default eventSlice.reducer;
