import React from 'react';
import MediaObject from '../baseComponents/cards/MediaObject';
import aboutData from '../data/about.json';
import CTACard from '../baseComponents/cards/CTACard';
import TeamMembersPanel from '../baseComponents/TeamMembersPanel';
import ImageCardList from '../baseComponents/cards/ImageCardList';

export default function About() {
	const { contact, mainCard, teamCards, partners } = aboutData.about;
	const {
		id: rId,
		title: rTitle,
		subTitle: rSubTitle,
		imageDirection: rImageDirection,
		backGroundColor: rBackGroundColor,
		description: rDescription
	} = mainCard;
	const {data, title: teamTitle} = teamCards;

	const { id: contactId, title: contactTitle, description: contactDescription } = contact;
	const {title:partnerTitle, description: partnerDescription, images: partnerImages} = partners 

	return (
		<div>
			<div style={{ height: '100px', background: '#ccc', padding: '90px' }}> HEADER IMAGE PLACE HOLDER </div>

			<MediaObject
				id={rId}
				title={rTitle}
				subTitle={rSubTitle}
				description={rDescription}
				backgroundColor={rBackGroundColor}
				imageDirection={rImageDirection}
			/>
			<ImageCardList title={partnerTitle} description={partnerDescription} images={partnerImages}/>
			<CTACard
				id={contactId}
				title={contactTitle}
				description={contactDescription}
				actionType={'conatctSupportMail'}
			/>
			<TeamMembersPanel title={teamTitle} data={data}/>
		</div>
	);
}
