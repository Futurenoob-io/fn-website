import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useAppContext } from '../../lib/react/appContextLib';

export default function AuthenticatedRoute({ children, ...rest }) {
	const { pathname, search } = useLocation();
	const { isAuthenticated } = useAppContext();
	return (
		<Route {...rest}>{isAuthenticated ? children : <Redirect to={`/auth?redirect=${pathname}${search}`} />}</Route>
	);
}
