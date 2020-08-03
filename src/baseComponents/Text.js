import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
const textStyle = {
	fontFamily: 'MencoMedium',
	fontStyle: 'normal',
	fontWeight: '300',
	fontSize: '25px',
	lineHeight: '31px'
}
const useStyles= createUseStyles({
	primaryStyle: textStyle,
	description:{
		...textStyle,
		padding: '0 120',
		marginBottom: '48px'
	}
})
function Text({ type = 'description', text }) {
	const classes= useStyles();
	let className = classes.primaryStyle;
	if(type==='description') className = classNames(className, classes.description)
	return <div className={className}>{text}</div>;
}
export default Text;

// TODO put the types here wherever there are more text
// use this
