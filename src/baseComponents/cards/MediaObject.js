import React from 'react';
import { createUseStyles } from 'react-jss';
import Logo from '../images/Logo';
import classNames from 'classnames';

const useStyles = createUseStyles({
	card: {
		display: 'flex',
		alignItems: 'flexStart',
		padding: '1em',
		borderRadius: '3px',
		margin: '0 50px 0 50px'
	},
	cardImage: {
		margin: '1em'
	},
	cardContent: {
		flex: 1,
		margin: '40px'
	},
	cardTitle: {
		margin: '0 0 .5em'
	},
	cardSubTitle: {
		fontSize: '14px'
	},
	cardDescription: {
		fontSize: '12px'
	},
	rightImageCard: {
		flexDirection: 'row-reverse'
	}
});

function MediaObject({
	id,
	imgSrc,
	imgAlt = '',
	title,
	subTitle,
	description,
	imageDirection = 'left',
	backgroundColor = '#F6F3EB'
}) {
	const classes = useStyles();

	const cardClassName = classNames({ [classes.card]: true, [classes.rightImageCard]: imageDirection === 'right' });

	return (
		<div key={id} className={cardClassName} style={{ backgroundColor }}>
			<Logo />
			<div className={classes.cardContent}>
				<h3 className={classes.cardTitle}>{title}</h3>
				<h3 className={classes.cardSubTitle}>{subTitle}</h3>
				<p className={classes.cardDescription}>{description}</p>
			</div>
		</div>
	);
}
export default MediaObject;
