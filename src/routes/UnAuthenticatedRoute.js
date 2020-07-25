import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppContext } from '../lib/react/appContextLib';
import querystring from '../lib/js/querystring';

export default function UnauthenticatedRoute({ children, ...rest }) {
	const { isAuthenticated } = useAppContext();
	const redirect = querystring('redirect');
	return (
		<Route {...rest}>
			{!isAuthenticated ? children : <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />}
		</Route>
	);
}
