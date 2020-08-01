import React from 'react';
import { createUseStyles } from 'react-jss';
import MediaObject from './MediaObject';

const useStyles = createUseStyles({
	cards: {
		//margin: '0 150px'
	}
});

function MediaObjectList({ data = [], id }) {
	const classes = useStyles();

	function renderMediaObject({
		id,
		imgSrc,
		imgAlt = '',
		title,
		subTitle,
		description,
		backgroundColor,
		imageDirection
	}) {
		return (
			<div key={id} className={classes.cards}>
				<MediaObject
					id={id}
					title={title}
					subTitle={subTitle}
					description={description}
					backgroundColor={backgroundColor}
					imageDirection={imageDirection}
				/>
			</div>
		);
	}
	const cardsListItems = data.map(renderMediaObject);

	return (
		<div key={id} className={classes.cardsContainer}>
			{cardsListItems}
		</div>
	);
}
export default MediaObjectList;
