import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	card: {
		display: 'flex',
		alignItems: 'flexStart',
		background: '#F6F3EB',
		padding: '1em',
		borderRadius: '3px',
		maxWidth: '24em'
	},
	cardImage: {
		marginRight: '1em'
	},
	cardContent: {
		flex: 1
	},
	cardTitle: {
		margin: '0 0 .5em'
	},
	cardSubTitle: {
		fontSize: '14px'
	},
	cardDescription: {
		fontSize: '12px'
	}
});

function MediaObject({ id, imgSrc, imgAlt = '', title, subTitle, description, imageDirection = left }) {
	const classes = useStyles();

	return (
		<div key={id} className={classes.card}>
			<img className={classes.cardImage} src={imgSr} alt={imgAlt} />
			<div className={classes.cardContent}>
				<h3 className={classes.cardTitle}>{title}</h3>
				<h3 className={classes.cardSubTitle}>{subTitle}</h3>
				<p className={classes.cardDescription}>{description}</p>
			</div>
		</div>
	);
}
export default MediaObject;
