import './style.css';

import {
	Box, Grid, Typography
} from '@material-ui/core';
import moment from 'moment';
import React from 'react';

import bgMainCard from '../../../../assets/svg/bgMainCard.svg';
import Online from '../../Tab/container/Online';

export default function MainCard({
	title, location, time, type
}) {
	const styles = {
		paperContainer: {
			background:
				'linear-gradient(89.92deg, rgba(0, 0, 0, 0.92) 57.94%, #66F39F 103.75%)',
		},
	};
	return (
		<Grid container>
			<Grid item xs={12} style={styles.paperContainer}
				className="card">
				<Grid item xs={2} className="center-center">
					<Online></Online>
				</Grid>
				<Grid item width={'200px'} minHeight={'150px'}>
					<Box marginBottom={2} marginLeft={1} marginTop={1}>
						<Box sx={{ color: '#f2f2f2' }}>
							<Typography variant="h5">{title}</Typography>
						</Box>
						<Box sx={{ color: '#909090' }}>
							<Typography variant="h6">{location}</Typography>
							<Typography variant="h6">
								{moment(time).utc().format('YYYY-MM-DD hh:mm')}
							</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
}
