import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
	navMenu: {
		display: 'flex',
		listStyleType: 'none',
		margin: 0,
		padding: 0
    },
    horizontal: {
        flexDirection: 'row',
		margin: '33 0 35 0'
    },
    vertical: {
        flexDirection: 'column'
	},
	navContainer:{
		flex: 1.5
	}
});
function NavList({children, type='horizontal'}) {
	const classes = useStyles();
	
	return (
		<nav className={classes.navContainer}>
			<ul className={classNames(classes.navMenu,classes[type])}>{children}</ul>
		</nav>
	);
}
export default NavList;