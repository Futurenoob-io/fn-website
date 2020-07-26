import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	secondaryFormTitle: {
		color: '#fff',
		fontWeigth: 'bold'
	}
});

function Title({ title, type = 'formTitle' }) {
	const classes = useStyles();

	return <h4 className={classes.secondaryFormTitle}>{title}</h4>;
}

export default Title;
