import Home from '../../container/Home';
import Platform from '../../container/Platform';
import Hackathon from '../../container/Hackathon';
import About from '../../container/About';

const mainNavigation = [
	{
		path: '/',
		name: 'Home',
		id: 'home',
		component: Home,
		isPublic: true,
		isNavMenu: true
	},
	{
		path: '/platform',
		name: 'Platform',
		id: 'Platform',
		component: Platform,
		isPublic: true,
		isNavMenu: true
	},
	{
		path: '/hackathon',
		name: 'Hackathon',
		id: 'hackathon',
		component: Hackathon,
		isPublic: true,
		isNavMenu: true
	},
	{
		path: '/About',
		name: 'About',
		id: 'about',
		component: About,
		isPublic: true,
		isNavMenu: true
	}
];
export default mainNavigation;
