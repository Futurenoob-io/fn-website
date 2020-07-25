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
		component: SingnUp
	},
	{
		path: '/signIn',
		name: 'Sign In',
		component: SignIn
	},
	{
		path: '/signOut',
		name: 'Sign Out',
		component: SignOut
	},
	{
		path: '/forgotPassword',
		name: 'Forgot Password',
		component: ForgotPassword,
		isNonMenuItem: true
	},
	{
		path: '/changePassword',
		name: 'Change Password',
		component: ChangePassword
	},
	{
		path: '/UnSubscribMe',
		name: 'Un Subscribe Me',
		component: UnSubscribeMe
	}
];

const generalRoutes = [
	{
		path: '/',
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
		path: '/About',
		name: 'About',
		component: About
	}
];
const routes = [ ...generalRoutes, ...authenticationRoutes ];

export default routes;
