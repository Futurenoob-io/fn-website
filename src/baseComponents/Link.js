import React, { useState } from 'react';

const STATUS = {
	HOVERED: 'hovered',
	NORMAL: 'normal'
};

function Link(props) {
	let [ status, setStatus ] = useState(STATUS.NORMAL);

	function handleStatusChange() {
		if (status === STATUS.HOVERED) {
			status = STATUS.NORMAL;
		} else {
			status = STATUS.HOVERED;
		}
	}

	return (
		<a href={props.page} onMouseEnter={handleStatusChange} onMouseLeave={handleStatusChange}>
			{props.children}
		</a>
	);
}

export default Link;
