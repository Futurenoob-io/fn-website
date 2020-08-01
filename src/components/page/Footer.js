import React from 'react';
import { createUseStyles } from 'react-jss';
import CopyRights from './CopyRights';
import Image from '../../baseComponents/Image';
import theme from '../../styles/theme';
import SignUp from '../../container/auth/SignUp';

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
				<Image src={theme.logoImages.big} description={theme.logoImages.description} />
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
