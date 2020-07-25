import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes/routes';
import { useAppContext } from '../lib/react/appContextLib';

function NavMenu(props) {
	const { isAuthenticated } = useAppContext();
	const canRenderRoute = (route, renderAll) => {
		if (renderAll) return true;
		if (!route.isNavMenu) return false;
		if (route.isPublic) return true;
		return isAuthenticated;
	};
	const listItems = (renderAll = false) =>
		routes.map((route) => {
			return (
				canRenderRoute(route, renderAll) && (
					<li key={route.id}>
						<NavLink to={route.path}>{route.name} </NavLink>
					</li>
				)
			);
		});
	return (
		<nav>
			<ul>
				<ul>{listItems()}</ul>
			</ul>
			<h3>to be deleted for temp development</h3>
			<ul>{listItems(true)}</ul>
		</nav>
	);
}
export default NavMenu;
