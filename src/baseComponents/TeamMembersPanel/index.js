import React from 'react';
import TopImageCardList from '../cards/TopImageCardList';
import CTACard from '../cards/CTACard';

export default function TeamMembersPanel({ data }) {
    return (<CTACard id={'platform-readyToSeeWhatWeBuild'} actionType={"TopCard"} title={"Our Team Members"} description={""}>
        <TopImageCardList cardsData={data} />
    </CTACard>);
}