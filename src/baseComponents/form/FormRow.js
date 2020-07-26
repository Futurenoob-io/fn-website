import React, { useState } from 'react';
import Label from './Label';

function FormRow({
	label,
	inputKey,
	type,
	value,
	showPlaceholder = true,
	displayLabel = true,
	autofocus = 'off',
	onChange,
	display = 'flexRow'
}) {
	let placeholder = showPlaceholder ? '' : label;
	let inputType = type === 'password' ? 'password' : 'text';
	let autoComplete = type === 'password' ? 'on' : 'off';

	return <div key={inputKey}>to fill in</div>;
}

export default FormRow;
