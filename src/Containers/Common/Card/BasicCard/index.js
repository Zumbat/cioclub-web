import { Box, Typography } from '@material-ui/core';

const BasicCard = ({
	title, location, time, bgImg, type
}) => (
	<Box
		xs={3}
		sx={{ backgroundImage: `url(${bgImg})` }}
		padding="4px"
		height="100px"
		width="90%"
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
			<>
				<Typography variant="h5">{title} dsdsa</Typography>
				<Typography variant="h6">{location} dsdsa</Typography>
				<Typography variant="h6">{time} dsdsa</Typography>
			</>
		</Box>

		<Typography>Mostra di più</Typography>
	</Box>
);

export default BasicCard;
