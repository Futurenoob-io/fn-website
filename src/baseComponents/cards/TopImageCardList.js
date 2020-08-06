import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import TopImageCard from '../cards/TopImageCard';
import classNames from 'classnames';

const useStyles = createUseStyles({
	cards: {
		maxWidth: '1200px',
		margin: '0 auto',
		display: 'grid',
		gridGap: '1rem',
		gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
		marginBottom: '73px'
	},
    portfolio: {
		girdGap: '3rem',
		gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
	}
});
let count = 0;
// TODO replace  keys with the id of the card
// TODO remove hard code
// TODO put show more

function TopCardList({ cardsData, type= "portfolio", isSeeMore }) {
	const classes = useStyles();
	const cardsClassName =  type === 'portfolio' ? classNames(classes.cards, classes.portfolio) : classes.cards;
	function renderTopImageCard({ id, imgSrc, imgAlt = '', title, description, subTitle }) {
		count++;
		return (
			// <div key={count}>
			<TopImageCard id={id} type={type} imgSrc={imgSrc} title={title} subTitle={subTitle} description={description} />
			// </div>
		);
	}
	let cardsListItems = cardsData.map(renderTopImageCard);
	cardsListItems = isSeeMore ? cardsListItems.filter((v,i)=> i<=4) : cardsListItems;
	return (
		<div key={count} className={cardsClassName}>
			{cardsListItems}
		</div>
	);
}
export default TopCardList;
