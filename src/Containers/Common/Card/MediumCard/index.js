import { Box, Typography } from '@material-ui/core';

const MediumCard = ({
	title, location, time, type
}) => (
	<Box
		xs={6}
		sx={{
			background:
				'linearGradient(89.92deg, rgba(0, 0, 0, 0.92) 57.94%, #66F39F 103.75%)',
		}}
		height="100px"
		borderRadius={'15px'}
	>
		<Box
			width={'50px'}
			height={'10px'}
			borderRadius={'3px'}
			sx={{ backgroundColor: '#66F39F', color: '#202020' }}
		>
			{type}
		</Box>
		<Box>
			<Typography text={title} variant="h6" />
			<Typography text={location} variant="h5" />
			<Typography text={time} variant="h5" />ù
		</Box>
	</Box>
);

export default MediumCard;
