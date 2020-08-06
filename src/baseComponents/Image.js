import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
	large: {
		width: '531px',
		height: '398px'
	},
	medium: {

	},
	small: {
	  width: '201px',
	  height: '58px'
	},
	portfolio: {
		height: '172px',
		width: '259px',
		maxWidth: '100%',
		maxHeight: '100%',
		objectFit: 'cover',
	},
	integration:{
		height: '63px',
		width: '63px',
		objectFit: 'cover',
	}
})
function Image({ src, description, type = 'large' }) {
	const classes = useStyles();
	return <img className={classes[type]} src={src} alt={description} />;
}
export default Image;
