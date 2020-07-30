import Home from '../../container/Home';
import Product from '../../container/Product';
import Hackathon from '../../container/Hackathon';
import News from '../../container/News';
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
		path: '/Product',
		name: 'Product',
		id: 'product',
		component: Product,
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
		path: '/News',
		name: 'News',
		id: 'news',
		component: News,
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
