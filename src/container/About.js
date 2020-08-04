import React from 'react';
import MediaObject from '../baseComponents/cards/MediaObject';
import aboutData from '../data/about.json';
import CTACard from '../baseComponents/cards/CTACard';
import TeamMembersPanel from '../baseComponents/TeamMembersPanel';

export default function About() {
	const { contact, mainCard, teamCards } = aboutData.about;
	const {
		id: rId,
		title: rTitle,
		subTitle: rSubTitle,
		imageDirection: rImageDirection,
		backGroundColor: rBackGroundColor,
		description: rDescription
	} = mainCard;
	const {data} = teamCards;

	const { id: contactId, title: contactTitle, description: contactDescription } = contact;

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
			<CTACard
				id={contactId}
				title={contactTitle}
				description={contactDescription}
				actionType={'conatctSupportMail'}
			/>
			<TeamMembersPanel data={data}/>
		</div>
	);
}
