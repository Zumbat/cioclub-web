import '../../Card/MainCard/style.css';

import { Box, Typography } from '@material-ui/core';
import React from 'react';

export default function Online() {
	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			minWidth={'45px'}
			height={'20px'}
			padding={'5px'}
			borderRadius={'5px'}
			sx={{ color: '#202020', backgroundColor: '#66F39F' }}
		>
			{/* {type}online */}
			<Typography>Online</Typography>
		</Box>
	);
}
