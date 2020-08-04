import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
	large:{
		width: '531px',
		height: '398px'
	},
	medium:{

	},
	small:{

	},
	portfolio:{
		height: '180px',
		width: '100%'
	}
})
function Image({ src, description, type='large' }) {
	const classes= useStyles();
	return <img className={classes[type]} src={src} alt={description} />;
}
export default Image;
