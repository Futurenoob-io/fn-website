import React, { useState } from 'react';

function Button({ label, isloading, isDisabled, id, isLoading, onClick }) {
	const key = id || label;
	return (
		<button key={id} disabled={isDisabled} type="submit">
			{isloading && <span>...</span>}
			{label}
		</button>
	);
}
export default Button;
