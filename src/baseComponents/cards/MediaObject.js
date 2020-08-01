import React from 'react';
import { createUseStyles } from 'react-jss';
import Logo from '../images/Logo';
import classNames from 'classnames';

const centerIt = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};

const useStyles = createUseStyles({
	card: {
		display: 'flex',
		alignItems: 'flexStart',
		padding: '1em',
		borderRadius: '3px',
		margin: '0 50px 0 50px'
	},
	cardImage: {
		...centerIt
	},
	cardContent: {
		flex: 1,
		margin: '40px',
		display: 'flex',
		flexDirection: 'column'
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
	},
	leftTopOutsideImageCard: {
		marginTop: '-100px'
	}
});

function MediaObject({
	id,
	imgSrc,
	imgAlt = '',
	title,
	subTitle,
	description,
	imageDirection = 'leftTopOutsideImage',
	backgroundColor = '#F6F3EB'
}) {
	const classes = useStyles();

	const cardClassName = classNames({
		[classes.card]: true,
		[classes.rightImageCard]: imageDirection === 'right'
	});

	const cardImageClassName = classNames({
		[classes.cardImage]: imageDirection === 'right' || imageDirection === 'left',
		[classes.leftTopOutsideImageCard]: imageDirection === 'leftTopOutsideImage'
	});

	return (
		<div key={id} className={cardClassName} style={{ backgroundColor }}>
			<div className={cardImageClassName}>
				<Logo />
			</div>
			<div className={classes.cardContent}>
				<h3 className={classes.cardTitle}>{title}</h3>
				<h3 className={classes.cardSubTitle}>{subTitle}</h3>
				<p className={classes.cardDescription}>{description}</p>
			</div>
		</div>
	);
}
export default MediaObject;
