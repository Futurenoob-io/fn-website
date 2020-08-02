import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
	container: {
		boxSizing: 'border-box',
		borderRadius: '100px',
		fontFamily: 'MencoMedium',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '24px',
		lineHeight: '32px',
		padding: '6.63px  23px 9.7px 24px',
		marginRight: '6px'
	},
	primary:{
		background: '#F4F4F5',
		border: '1px solid #000000'
	},
	secondary:{
		background: '#FF9643', 
		color:  '#000000',
		border: 'none'
	}
});

function Button({ label, isloading, isDisabled, id, isLoading, onClick, type = 'primary', isHovered = false }) {
	const classes = useStyles();

	const key = id || label;
	return (
		<button key={id} disabled={isDisabled}  className={classNames(classes.container, classes[type])} onClick={onClick}>
			{isloading && <span>...</span>}
			{label}
		</button>
	);
}
export default Button;
