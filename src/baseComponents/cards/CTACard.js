import React from 'react';
import { createUseStyles } from 'react-jss';
import Title from '../Title';
import Text from '../Text';
import Button from '../Button';
import classNames from 'classnames';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '6px',
		// margin: '0 200px 0 200px',
		padding: '8px 80px 80px 80px',
		background: '#FF9643'
	},
	topCardContainer:{
         background: '#E5E5E5'
	},
	mailTo: {
		fontWeight: 'bold',
		color: '#000',
		fontSize: '38px'
	}
});

// TODO WRITE A ACTIONS:JS FILE - put all actions in that
// and here pass the type and get the object
export default function CTACard({ title, description, children, actionType = 'earlyAccess' }) {
	const classes = useStyles();
	const handleEarlyAccessClick = (e) => console.log(e);
	const containerClass = actionType==='TopCard'? classNames(classes.container,classes.topCardContainer) : classes.container;
	return (
		<div>
			<div className={containerClass}>
				<Title title={title} color="primary" size="xl" />
				<Text type="description" text={description} />
				{actionType === 'earlyAccess' && (
					<Button
						key="earlyAccess"
						type="secondary"
						label={'Get Early Access'}
						onClick={handleEarlyAccessClick}
					/>
				)}
				{actionType === 'conatctSupportMail' && (
					<a href="mailto:support@futurenoob.io" className={classes.mailTo}>
						support@futurenoob.io
					</a>
				)}
				{children}
			</div>
		</div>
	);
}
