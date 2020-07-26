import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	formLabel: {
		fontWeigth: 'bold'
	}
});

function Label({ label, value, inputKey, id }) {
	const classes = useStyles();
	const key = id || label;
	return (
		<label value={value} htmlFor={inputKey}>
			{label}
		</label>
	);
}

export default Label;
