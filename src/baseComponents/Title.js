import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const titleStyle = {
	fontWeigth: 'bold',
	fontFamily: 'MencoMedium',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '24px',
	lineHeight: '31px',
	textAlign: 'center',
	marginTop: '5px',
	marginBottom: '24px'
};

const useStyles = createUseStyles({
	primaryTitle: titleStyle,
	lgTitle: {
		fontSize: '24px',
		lineHeight: '31px',
	},
	xlTitle: {
		fontSize: '45px',
		lineHeight: '58px'
	},
	secondaryTitle: {
		color: '#fff'
	},
	tertiaryTitle: {
		color: '#0558F0'
		//margin: '0 150px 0 150px',
	}
});

function Title({ title, type = 'formTitle', color = 'primary', size='lg' }) {
	// TODO use classnames here and update this part
	const classes = useStyles();
	let className = classes.primaryTitle;
	if (color === 'secondary') className = classNames(className,classes.secondaryTitle);
	if (color === 'tertiary') className = classNames(className,classes.tertiaryTitle);
	if(size==='xl') className = classNames(className,classes.xlTitle);
	if(size==='lg') className = classNames(className, classes.lgTitle)
;	return <h4 className={className}>{title}</h4>;
}

export default Title;
