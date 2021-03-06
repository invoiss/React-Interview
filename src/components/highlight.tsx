import { Box, colors, Typography } from '@mui/material';
import React from 'react';

export default function H( { children }: { children: React.ReactNode } ) {
	return (
		<Box 
		component='span'
		sx={{
			bgcolor     : colors.grey[ 500 ],
			borderRadius: 1,
			px          : .5,
			py          : .1,
			display     : 'inline-block',
		}}>
			<Typography component='span' color='white' variant='body2'>{children}</Typography>
		</Box>
	);
}
