import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mainNavigation } from '../routes/routes';
import { createUseStyles } from 'react-jss';
import { useAppContext } from '../../lib/react/appContextLib';

const activeStyle = {
	fontWeight: 'bold',
	color: 'red'
};

const navMenuItemContent = {
	color: '#000000',
	fontWeight: '500',
	fontSize: '24px',
	fontStyle: 'normal'
};

const useStyles = createUseStyles({
	navMenu: {
		display: 'flex',
		listStyleType: 'none',
		margin: 0,
		padding: 0
	},
	navMenuItem: {
		marginRight: '10px'
	},
	navMenuItemLink: {
		textDecoration: 'none'
	},
	activeNavMenuItemContent: {
		borderBottom: '0.2px solid #0558F0',
		...navMenuItemContent
	},
	navMenuItemContent
});

function NavMenu(props) {
	const classes = useStyles();
	const { isAuthenticated } = useAppContext();

	const [ activeMenuItem, setActiveMenuItem ] = useState('/SignIn');

	const canRenderRoute = (route) => {
		if (!route.isNavMenu) return false;
		if (route.isPublic) return true;
		return isAuthenticated;
	};
	function renderRoute(route) {
		const { id, path: to, name: linkText } = route;
		const contentClassName = activeMenuItem === to ? classes.activeNavMenuItemContent : classes.navMenuItemContent;

		function isActive(match, location) {
			if (!match) {
				return false;
			}
			setActiveMenuItem(to);
			return location.pathname === to;
		}

		return (
			<li key={id} className={classes.navMenuItem}>
				<NavLink to={to} className={classes.navMenuItemLink} isActive={isActive} activeStyle={activeStyle}>
					<span className={contentClassName}>{linkText}</span>
				</NavLink>
			</li>
		);
	}
	const listItems = (data) =>
		data.map((route) => {
			return canRenderRoute(route) && renderRoute(route);
		});
	return (
		<nav>
			<ul className={classes.navMenu}>{listItems(mainNavigation)}</ul>
		</nav>
	);
}
export default NavMenu;
