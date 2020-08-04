import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import Image from '../Image';

const centerIt = {
	display: 'flex',
	alignItems: 'flex-start',
	justifyContent: 'center'
};

const useStyles = createUseStyles({
	card: {
		display: 'flex',
		alignItems: 'flexStart',
		padding: '1em',
		borderRadius: '3px'
		//margin: '0 50px 0 50px'
	},
	cardImage: {
		...centerIt,
		flex: 1
	},
	cardContent: {
		flex: 1,
		margin: '40px',
		display: 'flex',
		flexDirection: 'column'
	},
	cardTitle: {
		margin: '0 0 .5em',
		fontFamily: 'Open Sans',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '36px',
		lineHeight: '160%'
	},
	cardSubTitle: {
		fontFamily: 'MencoMedium',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '160%'
	},
	cardDescription: {
		fontSize: '12px',
		fontFamily: 'MencoMedium',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '160%'
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
	imgType,
	imgAlt = '',
	title,
	subTitle,
	description,
	imageDirection = 'leftTopOutsideImage',
	backgroundColor = '#F6F3EB'
}) {
	// console.log(id);
	// const imgSrcValue = imgSrc || getImage(id);
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
				<Image src={imgSrc} type={imgType} />
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
