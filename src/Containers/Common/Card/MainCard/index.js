import './style.css';

import { Box, Typography } from '@material-ui/core';
import React from 'react';

import bgMainCard from '../../../../assets/svg/bgMainCard.svg';

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
		<Box
			xs={12}
			style={styles.paperContainer}
			className="top-left a"
			height={'200px'}
		>
			<Box
				className="center-center"
				width={'maxContent'}
				height={'30px'}
				padding={'5px'}
				borderRadius={'5px'}
				sx={{ backgroundColor: '#66F39F', color: '#202020' }}
			>
				{type}dfghhgfd
			</Box>
			<Box>
				<Typography text={title} variant="h5" />
				<Typography text={location} variant="h6" />
				<Typography text={time} variant="h6" />
			</Box>
			<Box xs={12} className="bottom-center">
				<Typography>Mostra di più</Typography>
			</Box>
		</Box>
	);
}
