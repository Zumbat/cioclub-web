import {
	Box, Grid, IconButton, Typography
} from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../API/index';
import profile from '../../assets/svg/profile.svg';
import { getEvents } from '../../features/event';
import { ROLES } from '../../routes/constants';
import { selectors } from '../Auth/store';
import BasicCard from '../Common/Card/BasicCard';
import MainCard from '../Common/Card/MainCard';
import { summaryCards } from './constants';
import styles from './Dashboard.module.scss';

function Dashboard(params) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEvents());
	}, []);

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
							title={getEvents.listEventi[0].nome}
							location={getEvents.listEventi[0].indirizzo}
							time={getEvents.listEventi[0].data}
							key={getEvents.listEventi[0].idEvento}
						/>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={2}>
							{getEvents.listEventi.slice(1).map((event, key) => (
								<BasicCard
									title={event.nome}
									location={event.indirizzo}
									time={event.data}
									key={event.idEvento}
								/>
							))}
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
