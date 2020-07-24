import Product from '../container/Product';
import News from '../container/News';
import Hackathon from '../container/Hackathon';
import Logout from '../container/Logout';
import Login from '../container/Login';
import Home from '../container/Home';

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
		isNonMenuItem: true
	},
	{
		path: '/Home',
		name: 'Home',
		component: Home
	},
	{
		path: '/Product',
		name: 'Product',
		component: Product
	},
	{
		path: '/News',
		name: 'News',
		component: News
	},
	{
		path: '/hackathon',
		name: 'Hackathon',
		component: Hackathon
	},
	{
		path: '/logout',
		name: 'Logout',
		component: Logout
	}
];

export default routes;
