import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import TopImageCard from '../cards/TopImageCard';

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
	const classes = useStyles();
	function renderTopImageCard({ id, imgSrc, imgAlt = '', title, description }) {
		count++;
		return (
			// <div key={count}>
				<TopImageCard id={id} imgSrc={imgSrc} title={title} description={description}/>
			// </div>
		);
	}
	const cardsListItems = cardsData.map(renderTopImageCard);
	return (
		<div key={count} className={classes.cards}>
			{cardsListItems}
		</div>
	);
}
export default TopCardList;
