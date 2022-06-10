import '../MainCard/style.css';

import {
	Box, Button, Grid, Typography
} from '@material-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Online from '../../Tab/container/Online';

export default function BasicCard({
	title, location, time, bgImg, type
}) {
	const [isIscritto, setIsIscritto] = useState();
	return (
		<Grid item xs={4}>
			<Box
				sx={
					{
						// backgroundImage: `url(${bgImg})`,
					}
				}
				className={'card'}
			>
				<Grid container>
					<Grid item xs={5}>
						<Online></Online>
					</Grid>
					<Grid item xs={7}>
						{isIscritto ?
							(
								<Button>Iscritto</Button>
							) :
							(
								<Button>Iscriviti</Button>
							)}
					</Grid>
					<Grid item xs={12}>
						<Box color={'black'}>
							<Typography variant="h6">{title}</Typography>
							<Box color={'#808080'}>
								<Typography variant="body">{location}</Typography>
								<Typography variant="body">
									{moment(time).utc().format('YYYY-MM-DD hh:mm')}
								</Typography>
							</Box>
						</Box>
						<Box
							display={'flex'}
							justifyContent={'center'}
							alignItems={'flex-end'}
							sx={{ paddingTop: '20px' }}
						>
							<Typography variant="body2">Mostra di più</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Grid>
	);
}
