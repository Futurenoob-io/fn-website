import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		background: 'linear-gradient(0deg, #001D90, #001D90), linear-gradient(0deg, #EBEBEB, #EBEBEB), #EBEBEB',
		borderRadius: '6px'
	}
});

function Button({ label, isloading, isDisabled, id, isLoading, onClick }) {
	const classes = useStyles();

	const key = id || label;
	return (
		<button key={id} disabled={isDisabled} type="submit" className={classes.container}>
			{isloading && <span>...</span>}
			{label}
		</button>
	);
}
export default Button;
