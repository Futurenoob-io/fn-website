import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from './routes';

function NavMenu(props) {
	const listItems = routes.map((route) => (
		<li key={route.name}>
			<NavLink to={route.path}>{route.name} </NavLink>
		</li>
	));
	return (
		<nav>
			<ul>{listItems}</ul>
		</nav>
	);
}
export default NavMenu;
