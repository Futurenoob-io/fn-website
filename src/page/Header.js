import React from 'react';
import { createUseStyles } from 'react-jss';
import NavMenu from '../nav/NavMenu';

function Header(props) {
	return (
		<header>
			<a href="#default">CompanyLogo</a>
			<NavMenu />
		</header>
	);
}
export default Header;
