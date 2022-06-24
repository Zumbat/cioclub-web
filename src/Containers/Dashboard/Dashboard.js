import {
	Box, Grid, IconButton, Typography
} from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import profile from '../../assets/svg/profile.svg';
import { getTodoAsync, showTodo } from '../../features/todo';
import BasicCard from '../Common/Card/BasicCard';
import MainCard from '../Common/Card/MainCard';

function Dashboard(params) {
	// const eventList = useSelector(selectors.getEvents());
const dispatch = useDispatch();
	const todo = useSelector(showTodo);

console.log(todo)
console.log(dispatch(getTodoAsync))


	
	// useEffect(() => {

	// 	dispatch(setEventsAsync());
	// 	console.log(events);
	// 	console.log(dispatch(setEventsAsync()));
	// }, []);

	// const eventList = selector(state => state.events.value);

	// const [events, setEvents] = useState({
	// 	listEventi: [
	// 		{
	// 			idEvento: '',
	// 			nome: '',
	// 			descrizione: '',
	// 			data: '',
	// 			status: '',
	// 			imgCopertina: '',
	// 			isOnline: '',
	// 			indirizzo: '',
	// 			link: '',
	// 			disable: '',
	// 		},
	// 	],
	// });
	return (
		<Grid container spacing={2} className={'center-center'}>
			<Grid item xs={7}>
				<Box marginY={3}>
					<Typography variant="h3">Dashboard</Typography>
					<Typography color="#707070">Gestisci i tuoi eventi</Typography>
				</Box>
			</Grid>
			<Grid item xs={1}>
				<Box>
					<IconButton aria-label="delete">
						<img src={profile} alt="profile" />
					</IconButton>
				</Box>
			</Grid>
			<Grid item xs={8}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Box sx={{ color: 'black' }}>
							<Typography variant="h5">Prossimi eventi</Typography>
						</Box>
						<MainCard
							// title={todo.listEventi[0].nome}
							// location={todo.listEventi[0].indirizzo}
							// time={todo.listEventi[0].data}
							// key={todo.listEventi[0].idEvento}
						/>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={2}>
							{/* {todo.listEventi.slice(1).map((item, key) => (
								<BasicCard
									title={item.nome}
									location={item.indirizzo}
									time={item.data}
									key={item.idEvento}
								/>
							))} */}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Box>
				<Typography></Typography>
			</Box>
		</Grid>
	);
}

export default Dashboard;

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import {
// 	addTodoAsync, getTodoAsync, showTodo
// } from '../../features/event';

// export default function Dashboard() {
// 	const todo = useSelector(showTodo);
// 	const dispatch = useDispatch();
// 	const [newTodo, setNewTodo] = useState({
// 		userId: 69,
// 		id: 69,
// 		title: '',
// 		completed: false,
// 	});

// 	const addNewTodo = () => {
// 		dispatch(addTodoAsync(newTodo));
// 	};

// 	return (
// 		<div className="App">
// 			<h1>Hello CodeSandbox</h1>
// 			<h2>Start editing to see some magic happen!</h2>
// 			<input
// 				onChange={e => setNewTodo({ ...newTodo, title: e.target.value })}
// 			/>
// 			<button onClick={addNewTodo}>Add new todo</button>

// 			{todo.map(item => (
// 				<p key={item.id}>{item.title}</p>
// 			))}
// 			<button onClick={() => dispatch(getTodoAsync('2'))}>GET TODO</button>
// 		</div>
// 	);
// }
