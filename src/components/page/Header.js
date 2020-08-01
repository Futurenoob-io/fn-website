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

// TODO remember to put the color  and stroke on the logo
// TODO remember to size the logo
function Header(props) {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<NavMenu />
			<ActionNavMenu />
		</header>
	);
}
export default Header;
