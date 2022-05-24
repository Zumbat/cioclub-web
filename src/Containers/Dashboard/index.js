import { Box, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import profile from '../../assets/svg/profile.svg';
import { ROLES } from '../../routes/constants';
import { selectors } from '../Auth/store';
import BasicCard from '../Common/Card/BasicCard';
import MainCard from '../Common/Card/MainCard';
import { summaryCards } from './constants';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectors.getUser());

	return (
		<>
			<Box>
				<Typography>Dashbard</Typography>
				<Typography>Gestisci i tuoi eventi</Typography>
			</Box>
			<Box>
				<img src={profile} alt="profile" />
			</Box>
			<Box>
				<Typography>Prossimi eventi</Typography>
				<MainCard />
				<BasicCard />
			</Box>
			<Box>
				<Typography></Typography>
			</Box>
		</>
	);
};

export default Dashboard;
