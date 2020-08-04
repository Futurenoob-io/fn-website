import React from 'react';
import { createUseStyles } from 'react-jss';
import Image from '../Image';

const useStyles = createUseStyles({
	card: {
		backgroundColor: 'halfwhite',
		color: 'black',
		padding: '1rem',
		height: 'auto',
		border: '1px solid #ccc',
		border: '1px solid #ccc',
		boxShadow: '2px 2px 6px 0px  rgba(0,0,0,0.3)',
		flexDirection: 'column',
		fontFamily: "MencoMedium"
	},
	cardImage: {
		// marginRight: '1em',
		flex: '1'
	},
	cardContent: {
		marginRight: '1px'
	},
	cardTitle: {
		margin: '0 0 .5em'
	},
	cardDescription: {
		fontSize: '12px'
	},
	cardBody:{
		display: 'flex',
		flexDirection: 'column',
		flex: '1'
	}
});

function TopImageCard({ id, imgSrc, imgAlt = '', title, description }) {
	const classes = useStyles();

	return (
		<div key={id} className={classes.card}>
				<Image  src={'/images/platform/Platform1.svg'} type={'portfolio'} />
		
			
			<div className={classes.cardBody}>
				<h3 className={classes.cardTitle}>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}
export default TopImageCard;
