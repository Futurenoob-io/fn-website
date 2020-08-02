import React from 'react';
import { createUseStyles } from 'react-jss';
import NavMenu from './NavMenu';
import ActionNavMenu from './ActionNavMenu';
import Logo from '../../baseComponents/images/Logo';

const useStyles = createUseStyles({
	header: {
		display: 'flex',
		justifyContent: 'flex-end',
		flexWrap: 'wrap'
	},
	logoContainer:{
		margin: '12 0 13 24',
		flex: 1
	}
});

// TODO remember to put the color  and stroke on the logo
// TODO remember to size the logo
function Header(props) {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<div className={classes.logoContainer}>
				<Logo stroke="#000000" fill="none" type="header" />
			</div>
			<NavMenu />
			<ActionNavMenu />
		</header>
	);
}
export default Header;
