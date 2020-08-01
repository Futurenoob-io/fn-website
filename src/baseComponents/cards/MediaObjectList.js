import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	cards: {
		maxWidth: '1200px',
		margin: '0 auto',
		display: 'grid',
		gridGap: '1rem',
		gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
	}
});

// TODO replace  keys with the id of the card
// TODO remove hard code
// TODO put show more

function MediaObjectList({ cardsData, id }) {
	function renderMediaObject({ id, imgSrc, imgAlt = '', title, description }) {
		count++;
		return (
			<div key={id} className={cards}>
				ONE
			</div>
		);
	}
	const cardsListItems = cardsData.map(renderMediaObject);
	const classes = useStyles();
	return (
		<div key={id} className={classes.cardsContainer}>
			{cardsListItems}
		</div>
	);
}
export default MediaObjectList;
