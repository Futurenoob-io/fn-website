import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes/routes';
import NotFound from '../container/NotFound';
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import UnauthenticatedRoute from '../routes/UnauthenticatedRoute';
import { useAppContext } from '../lib/react/appContextLib';

function Main(props) {
	const renderRoute = (route) => {
		const Route = route.isPublic ? UnauthenticatedRoute : AuthenticatedRoute;
		const exact = route.isNotExact;
		const { isAuthenticated } = useAppContext();
		return (
			<Route exact path={route.path} key={route.id}>
				<route.component />
			</Route>
		);
	};

	const routesList = routes.map(renderRoute);
	return (
		<main>
			<Switch>
				{routesList}
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</main>
	);
}
export default Main;
