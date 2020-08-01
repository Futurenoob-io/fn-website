import React from 'react';
import { createUseStyles } from 'react-jss';
import Title from '../Title';
import Text from '../Text';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '6px',
		// margin: '0 200px 0 200px',
		padding: '0 80px 0 80px',
		background: '#E1EFFA'
	}
});

export default function CTACard({ title, description, hasEarlyAccess = true }) {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.container}>
				<Title title={title} color="primary" size="xl" />
				<Text type="description" text={description} />
				{hasEarlyAccess && 'XXXXXXXXXXX PUT EARLY ACCESS BUTTON HERE...............'}
			</div>
		</div>
	);
}
