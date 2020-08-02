import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	card: {
		backgroundColor: 'halfwhite',
		color: 'red',
		padding: '1rem',
		height: '4rem',
		border: '1px solid #ccc',
		border: '1px solid #ccc',
		boxShadow: '2px 2px 6px 0px  rgba(0,0,0,0.3)'
	},
	cardImage: {
		marginRight: '1em'
	},
	cardContent: {
		marginRight: '1px'
	},
	cardTitle: {
		margin: '0 0 .5em'
	},
	cardDescription: {
		fontSize: '12px'
	}
});

function TopImageCard({ id, imgSrc, imgAlt = '', title, description }) {
	const classes = useStyles();

	return (
		<div key={id} className={classes.card}>
			<img className={classes.cardImage} src={imgSrc} alt={imgAlt} />
			<div className={classes.cardBody}>
				<h3 className={classes.cardTitle}>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}
export default TopImageCard;
