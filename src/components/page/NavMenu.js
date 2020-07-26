import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes/routes';
import { createUseStyles } from 'react-jss';
import { useAppContext } from '../../lib/react/appContextLib';

const navMenuItemContent = {
	color: '#0558F0',
	fontWeight: 'bold',
	fontSize: '14px',
	lineHeight: '24px',
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

	const canRenderRoute = (route, renderAll) => {
		if (renderAll) return true;
		if (!route.isNavMenu) return false;
		if (route.isPublic) return true;
		return isAuthenticated;
	};
	const listItems = (renderAll = false) =>
		routes.map((route) => {
			const contentClassName =
				activeMenuItem === route.path ? classes.activeNavMenuItemContent : classes.navMenuItemContent;
			return (
				canRenderRoute(route, renderAll) && (
					<li key={route.id} className={classes.navMenuItem}>
						<NavLink
							to={route.path}
							className={classes.navMenuItemLink}
							isActive={(match, location) => {
								if (!match) {
									return false;
								}
								setActiveMenuItem(route.path);
								return location.pathname === route.path;
							}}
							activeStyle={{
								fontWeight: 'bold',
								color: 'red'
							}}
						>
							<span className={contentClassName}>{route.name}</span>
						</NavLink>
					</li>
				)
			);
		});
	return (
		<nav>
			<ul className={classes.navMenu}>{listItems()}</ul>

			<h3>TDODO: REMOVE </h3>
			<ul>{listItems(true)}</ul>
		</nav>
	);
}
export default NavMenu;
