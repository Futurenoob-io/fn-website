import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import CopyRights from './CopyRights';
import Image from '../../baseComponents/Image';
import theme from '../../styles/theme';
import SignUp from '../../container/auth/SignUp';
import Logo from '../../baseComponents/images/Logo';
import { useAppContext } from '../../lib/react/appContextLib';
import NavList from '../../baseComponents/NavList';
import { mainNavigation } from '../routes/routes';
import { footer } from '../../data/general.json';

const activeStyle = {
	fontWeight: 'bold',
	color: 'red'
};

const navMenuItemContent = {
	color: 'white',
	fontWeight: '300',
	fontSize: '18px',
	fontStyle: 'normal',
	fontFamily: 'MencoMedium',
	lineHeight: '32px',
};

const useStyles = createUseStyles({
	footer: theme.footer,
	logo: {
		flexGrow: '3'
	},
	section: {
		flexGrow: '2',
		margin: '4px'
	},
	signUpSection: {
		flexGrow: '2',
		width: '33%',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignSelf: 'flex-start'
	},
	navMenuItem: {
		marginRight: '10px'
	},
	navMenuItemLink: {
		textDecoration: 'none'
	},
	activeNavMenuItemContent: {
		//TOBE added for active style
		...navMenuItemContent
	},
	navMenuItemContent,
	navHeader: {
		fontFamily: 'MencoMedium',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '24px',
		lineHeight: '32px',
		marginBottom: '15px'
	},
	signUpDescr: {
		fontFamily: 'MencoMedium',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '31px',
		textAlign: 'center'
	}
});

function Footer(props) {
	const classes = useStyles();
	//TOBE routes to be added to the base component later
	const { isAuthenticated } = useAppContext();

	const [activeMenuItem, setActiveMenuItem] = useState('/SignIn');

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
	const legalItems = (data) => data.map((item) => (
		<a key={item.key} target="_blank" href={item.link} className={classes.navMenuItemLink} activeStyle={activeStyle}>
			<span className={classes.navMenuItemContent}>
				{item.title}
			</span>
		</a>
	))
	return (
		<footer className={classes.footer}>
			<div className={classes.logo}>
				<Logo type="footer"/>
			</div>
			<div className={classes.section}>
				<div className={classes.navHeader}>Company</div>
				<NavList type='vertical'>
					{listItems(mainNavigation)}
				</NavList>
			</div>
			<div className={classes.section}><div className={classes.navHeader}>Legal</div>
				<NavList type='vertical'>
					{legalItems(footer.legal)}
				</NavList>
			</div>
			<div className={classes.section}><div className={classes.navHeader}>Social</div></div>
			<div className={classes.signUpSection}>

				<SignUp signUpTitle={footer.signUp.title} className={classes.signUpContainer} />

			</div>
		</footer>
	);
}
export default Footer;
