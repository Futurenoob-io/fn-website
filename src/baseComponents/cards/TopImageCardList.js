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
let count = 0;
// TODO replace  keys with the id of the card
// TODO remove hard code
// TODO put show more

function TopCardList({ cardsData }) {
	function renderTopImageCard({ id, imgSrc, imgAlt = '', title, description }) {
		count++;
		return (
			<div key={count} className={cards}>
				ONE
			</div>
		);
	}
	const cardsListItems = cardsData.map(renderTopImageCard);
	const classes = useStyles();
	return (
		<div key={count} className={classes.cardsContainer}>
			{cardsListItems}
		</div>
	);
}
export default TopCardList;
