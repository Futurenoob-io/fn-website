import React from 'react';
import { createUseStyles } from 'react-jss';
import Title from '../Title';
import Text from '../Text';
import Button from '../Button';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '6px',
		// margin: '0 200px 0 200px',
		padding: '8px 80px 80px 80px',
		background: '#E1EFFA'
	}
});

export default function CTACard({ title, description,children,hasEarlyAccess = true }) {
	const classes = useStyles();
	const handleEarlyAccessClick=(e)=>console.log(e);
	return (
		<div>
			<div className={classes.container}>
				<Title title={title} color="primary" size="xl" />
				<Text type="description" text={description} />
				{hasEarlyAccess && <Button key="earlyAccess" type="secondary" label={'Get Early Access'} onClick={handleEarlyAccessClick} />}
			    {children}
			</div>
		</div>
	);
}
