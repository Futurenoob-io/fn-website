import Home from '../container/Home';
import Product from '../container/Product';
import News from '../container/News';
import Hackathon from '../container/Hackathon';
import About from '../container/News';
import SingnUp from '../container/auth/SignUp';
import SignIn from '../container/auth/SignIn';
import SignOut from '../container/auth/SignOut';
import ForgotPassword from '../container/auth/ForgotPassword';
import ChangePassword from '../container/auth/ChangePassword';
import UnSubscribeMe from '../container/auth/UnSubscribeMe';

const authenticationRoutes = [
	{
		path: '/signUp',
		name: 'Sign Up',
		component: SingnUp,
		id: 'siginUp',
		isPublic: true
	},
	{
		path: '/signIn',
		name: 'Sign In',
		id: 'siginIn',
		component: SignIn,
		isPublic: true,
		isNotExact: true
	},
	{
		path: '/auth',
		name: 'Sign In',
		id: 'siginInAuth',
		component: SignIn,
		isPublic: true,
		isNotExact: true,
		isNavMenu: true
	},
	{
		path: '/signOut',
		name: 'Sign Out',
		id: 'siginOut',
		component: SignOut,
		isNavMenu: true
	},
	{
		path: '/forgotPassword',
		name: 'Forgot Password',
		component: ForgotPassword,
		id: 'forgotPassword',
		isNonMenuItem: true,
		isPublic: true
	},
	{
		path: '/changePassword',
		name: 'Change Password',
		id: 'changePassword',
		component: ChangePassword
	},
	{
		path: '/UnSubscribMe',
		name: 'Un Subscribe Me',
		id: 'unsubscribeMe',
		component: UnSubscribeMe
	}
];

const generalRoutes = [
	{
		path: '/',
		name: 'Home',
		id: 'home',
		component: Home,
		isNavMenu: true
	},
	{
		path: '/Product',
		name: 'Product',
		id: 'product',
		component: Product,
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
const routes = [ ...generalRoutes, ...authenticationRoutes ];

export default routes;
