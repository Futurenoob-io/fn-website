import React from 'react';
import MediaObjectList from '../baseComponents/cards/MediaObjectList';
import data from '../data/platform.json';

export default function Platform() {
	const mainCards = data.platform.mainCards;
	return <MediaObjectList id={'platformMainCards'} data={mainCards} />;
}
