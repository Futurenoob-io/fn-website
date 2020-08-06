import React, {useState} from 'react';
import MediaObjectList from '../baseComponents/cards/MediaObjectList';
import platformData from '../data/platform.json';
import CTACard from '../baseComponents/cards/CTACard';
import TopImageCardList from '../baseComponents/cards/TopImageCardList';
import ImageCardList from '../baseComponents/cards/ImageCardList';

export default function Platform() {
	const mainCards = platformData.platform.mainCards.data;
	const whatWeBuild = platformData.platform.readyToSeeWhatWebuild;
	const whatWeBuildTitle = whatWeBuild.title;
	const whatWeBuildDesc = whatWeBuild.description;
	const {investorCards} = platformData.platform;
	const handleSeeMoreClick = (e)=> setIsSeeMore(!isSeeMore);
	const [isSeeMore, setIsSeeMore] = useState(false);
    const {data, title: integrationTitle} = investorCards;
	let {gamingEngines} = data;
	gamingEngines = !isSeeMore ? gamingEngines.filter((v,i)=> i<4) : gamingEngines;
	const {images, title, description} = platformData.platform.futureIntegrations;

	return (
		<div>
			<MediaObjectList id={'platformMainCards'} data={mainCards} />
			<CTACard id={'platform-readyToSeeWhatWeBuild'} title={whatWeBuildTitle} description={whatWeBuildDesc} />
			<CTACard isSeeMore={isSeeMore} actionHandler={handleSeeMoreClick} id={'IntegrationPanel'} actionType={"IntegrationTopCard"} title={integrationTitle} description={""}>
				<TopImageCardList cardsData={gamingEngines} type={'integration'} />
			</CTACard>
			
			<ImageCardList title={title} description={description} images={images}/>
			
			
		</div>
	);
}
