import React from 'react';
import Platform1 from '../images/Platform1.svg';
import Platform2 from '../images/Platform2.svg';
import Platform3 from '../images/Platform3.svg';
import Platform4 from '../images/Platform4.svg';
import Platform5 from '../images/Platform5.svg';
import TeamWork from '../images/Teamwork.svg';

const imageMap = {
	Platform1: Platform1,
	Platform2: Platform2,
	Platform3: Platform3,
	Platform4: Platform4,
	Platform5: Platform5,
	TeamWork: TeamWork
};
export default function getImage({ imageId }) {
	console.log(imageMap);
	return imageMap[imageId];
}
