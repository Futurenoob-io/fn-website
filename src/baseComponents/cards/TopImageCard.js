import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import Image from '../Image';

const useStyles = createUseStyles({
	card: {
		backgroundColor: 'halfwhite',
		color: 'black',
		padding: '1rem',
		height: 'auto',
		border: '1px solid #ccc',
		boxShadow: '2px 2px 6px 0px  rgba(0,0,0,0.3)',
		flexDirection: 'column',
		fontFamily: "MencoMedium",
		minHeight: '407px'
	},
	portfolio: {
		border: 'none',
		boxShadow: 'none',
		padding: '0rem'
	},
	cardImage: {
		// marginRight: '1em',
		flex: '1'
	},
	cardContent: {
		marginRight: '1px'
	},
	cardTitle: {
		margin: '0 0 .5em',
		fontSize: '20px'
	},
	cardDescription: {
		fontSize: '18px'
	},
	cardBody: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1',
		textAlign: 'center'
	},
	cardImageContainer: {
		display: 'flex',
		flex: '1'
	}
});

function TopImageCard({ type = "portfolio", id, imgSrc, imgAlt = '', title, subTitle, description }) {
	const classes = useStyles();
	const cardClassName = type === 'portfolio' ? classNames(classes.card, classes.portfolio) : classes.portfolio;

	return (
		<div key={id} className={cardClassName}>
			<div className={classes.cardImageContainer}>
				<Image src={imgSrc} type={'portfolio'} />
			</div>



			<div className={classes.cardBody}>
				{type === 'portfolio' && <><h3 className={classes.cardTitle}>{title}</h3>
					<h3 className={classes.cardTitle}>{subTitle}</h3></>}
				<p className={classes.cardDescription}>{description}</p>
			</div>
		</div>
	);
}
export default TopImageCard;
