import React from 'react';
import { createUseStyles } from 'react-jss';
import CopyRights from './CopyRights';
import Image from '../../baseComponents/Image';
import theme from '../../styles/theme';
import SignUp from '../../container/auth/SignUp';
import Logo from '../../baseComponents/images/Logo';
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
		justifyContent: 'center'
	}
});

function Footer(props) {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<div className={classes.logo}>
				<Logo />
			</div>
			<div className={classes.section}>Company</div>
			<div className={classes.section}>Legal</div>
			<div className={classes.section}>Social</div>
			<div className={classes.signUpSection}>
				Sign up
				<div>
					<SignUp className={classes.signUpContainer} />
				</div>
			</div>
		</footer>
	);
}
export default Footer;
