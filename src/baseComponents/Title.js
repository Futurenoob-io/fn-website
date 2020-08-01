import React from 'react';
import { createUseStyles } from 'react-jss';

const titleStyle = {
	fontWeigth: 'bold'
};

const useStyles = createUseStyles({
	primaryTitle: titleStyle,
	secondaryTitle: {
		color: '#fff',
		...titleStyle
	},
	tertiaryTitle: {
		color: '#0558F0',
		//margin: '0 150px 0 150px',
		...titleStyle
	}
});

function Title({ title, type = 'formTitle', color = 'primary' }) {
	// TODO use classnames here and update this part
	const classes = useStyles();
	let className = classes.primaryTitle;
	if (color === 'secondary') className = classes.secondaryTitle;
	if (color === 'tertiary') className = classes.tertiaryTitle;

	return <h4 className={className}>{title}</h4>;
}

export default Title;
