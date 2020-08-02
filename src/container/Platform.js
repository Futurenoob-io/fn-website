import React from 'react';
import MediaObjectList from '../baseComponents/cards/MediaObjectList';
import platformData from '../data/platform.json';
import CTACard from '../baseComponents/cards/CTACard';

export default function Platform() {
	const mainCards = platformData.platform.mainCards.data;
	const whatWeBuild = platformData.platform.readyToSeeWhatWebuild;
	const whatWeBuildTitle = whatWeBuild.title;
	const whatWeBuildDesc = whatWeBuild.description;

	return (
		<div>
			<MediaObjectList id={'platformMainCards'} data={mainCards} />
			<CTACard id={'platform-readyToSeeWhatWeBuild'} title={whatWeBuildTitle} description={whatWeBuildDesc} />
		</div>
	);
}
