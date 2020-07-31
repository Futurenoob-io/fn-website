import React from 'react';
import CopyRights from './CopyRights';
import theme from '../../styles/theme';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	footer: theme.footer,
	logo: {},
	section: {
		display: 'flex',
		justifyContent: 'center',
		margin: '5px'
	},
	signUpSection: {
		flexGrow: '1',
		display: 'flex',
		justifyContent: 'center'
	}
});

function Footer(props) {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<div className={classes.logo}>Logo</div>
			<div className={classes.section}>Company</div>
			<div className={classes.section}>Legal</div>
			<div className={classes.section}>Social</div>
			<div className={classes.signUpSection}>Sign up</div>
		</footer>
	);
}
export default Footer;
