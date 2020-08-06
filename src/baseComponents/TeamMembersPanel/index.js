import React from 'react';
import TopImageCardList from '../cards/TopImageCardList';
import CTACard from '../cards/CTACard';

export default function TeamMembersPanel({ data, title }) {
    return (<CTACard id={'platform-readyToSeeWhatWeBuild'} actionType={"TopCard"} title={title} description={""}>
        <TopImageCardList cardsData={data} type={'portfolio'} />
    </CTACard>);
}