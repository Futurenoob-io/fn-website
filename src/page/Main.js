import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../nav/routes';
import NotFound from '../container/NotFound';

function Main(props) {
	return (
		<main>
			<Switch>
				{routes.map((route) => (
					<Route exact path={route.path} key={route.path}>
						<route.component />
					</Route>
				))}

				<Route>
					<NotFound />
				</Route>
			</Switch>
		</main>
	);
}
export default Main;
