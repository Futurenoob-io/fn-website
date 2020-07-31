import React from 'react';
import { createUseStyles } from 'react-jss';
import CopyRights from './CopyRights';
import theme from '../../styles/theme';

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
			<div className={classes.logo}>Logo</div>
			<div className={classes.section}>Company</div>
			<div className={classes.section}>Legal</div>
			<div className={classes.section}>Social</div>
			<div className={classes.signUpSection}>Sign up</div>
		</footer>
	);
}
export default Footer;
