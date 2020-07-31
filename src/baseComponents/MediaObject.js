import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	media: {
		display: 'flex',
		alignItems: 'flexStart',
		background: '#F6F3EB',
		padding: '1em',
		borderRadius: '3px',
		maxWidth: '24em'
	},
	mediaObject: {
		marginRight: '1em'
	},
	mediaBody: {
		flex: 1
	},
	mediaHeading: {
		margin: '0 0 .5em'
	}
});

function MediaObject({ id, imgSrc, imgAlt = '', heading, subHeading, description, imageDirection = left }) {
	const classes = useStyles();

	return (
		<div key={id} className={classes.media}>
			<img className={classes.mediaObject} src={imgSr} alt={imgAlt} />
			<div className={classes.mediaBody}>
				<h3 className={classes.mediaHeading}>{heading}</h3>
				<h3 className={classes.subHeading}>{subHeading}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}
export default MediaObject;
