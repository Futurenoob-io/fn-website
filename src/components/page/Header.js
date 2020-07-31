import React from 'react';
import { createUseStyles } from 'react-jss';
import NavMenu from './NavMenu';
import ActionNavMenu from './ActionNavMenu';

const useStyles = createUseStyles({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	}
});

function Header(props) {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<a href="#default">CompanyLogo</a>
			<NavMenu />
			<ActionNavMenu />
		</header>
	);
}
export default Header;
