import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		background: '',
		color: '',
		padding: ''
	}
});

function Button({ label, isloading, isDisabled, id, isLoading, onClick, type = 'primary', isHovered = false }) {
	const classes = useStyles();

	const key = id || label;
	return (
		<button key={id} disabled={isDisabled} type="submit" className={classes.container} onClick={onClick}>
			{isloading && <span>...</span>}
			{label}
		</button>
	);
}
export default Button;
