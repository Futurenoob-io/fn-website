import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
const textStyle = {
	fontFamily: 'MencoMedium',
	fontStyle: 'normal',
	fontWeight: '300',
	fontSize: '25px',
	lineHeight: '31px',
	marginBottom: '48px'
}
const useStyles= createUseStyles({
	primaryStyle: textStyle,
	description:{
		...textStyle,
		padding: '0 120',
	},
	imageDescription:{
		padding: '0'
	}
})
function Text({ type = 'description', text }) {
	const classes= useStyles();
	let className = classes.primaryStyle;
	if(type==='description') className = classNames(className, classes.description);
	if(type=== 'imageDescription') className = classNames(className, classes.imageDescription);
	return <div className={className}>{text}</div>;
}
export default Text;

// TODO put the types here wherever there are more text
// use this
