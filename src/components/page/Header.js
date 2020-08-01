import React from 'react';
import { createUseStyles } from 'react-jss';
import NavMenu from './NavMenu';
import ActionNavMenu from './ActionNavMenu';
import Image from '../../baseComponents/Image';
import theme from '../../styles/theme';

const useStyles = createUseStyles({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	}
});
//TODO logo not avaiable
// TODO remember to put the color on the logo
function Header(props) {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<Image src={theme.logoImages.big} description={theme.logoImages.description} />

			<NavMenu />
			<ActionNavMenu />
		</header>
	);
}
export default Header;
