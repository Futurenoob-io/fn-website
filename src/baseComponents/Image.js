import React from 'react';

function Image({ src, description, type }) {
	return <img src={src} alt={description} />;
}
export default Image;
