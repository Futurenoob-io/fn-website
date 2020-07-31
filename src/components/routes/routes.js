import SingnUp from '../../container/auth/SignUp';
import SignIn from '../../container/auth/SignIn';
import SignOut from '../../container/auth/SignOut';
import ForgotPassword from '../../container/auth/ForgotPassword';
import ChangePassword from '../../container/auth/ChangePassword';
import UnSubscribeMe from '../../container/auth/UnSubscribeMe';
import StylesContainer from '../../container/StylesContainer';
import mainNavigation from '../../data/general/mainNavigation';
import NotFound from '../../container/NotFound';

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
		path: '/unSubscribMe',
		name: 'Un Subscribe Me',
		id: 'unsubscribeMe',
		component: UnSubscribeMe
	},
	{
		path: '/stylesContainer',
		name: 'StylesContainer',
		id: 'stylesContainer',
		isPublic: true,
		component: StylesContainer
	}
];

const notFoundRoute = [
	{
		path: '',
		name: 'Not Found',
		component: NotFound,
		id: 'notFound',
		isPublic: true
	}
];

const routes = [ ...mainNavigation, ...authenticationRoutes, ...notFoundRoute ];

export default routes;
export { mainNavigation, authenticationRoutes, notFoundRoute };
