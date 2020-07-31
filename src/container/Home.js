import React from 'react';
import { createUseStyles } from 'react-jss';
import SignUp from './auth/SignUp';
import data from '../data/home.json';
import Title from '../baseComponents/Title';

const wrapper = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	margin: '10px',
	borderRadius: '6px'
};

const useStyles = createUseStyles({
	container: {
		background: '',
		boxShadow: '',
		...wrapper
	},
	signUpContainer: {
		background: '',
		boxShadow: '',
		...wrapper
	}
});

export default function Home() {
	const classes = useStyles();
	const { signUpTitle, title, subTitle } = data.home;
	return (
		<div>
			<div className={classes.container}>
				<Title title={title} color="tertiary" />
				<Title title={subTitle} color="tertiary" />
			</div>
			<SignUp signUpTitle={signUpTitle} className={classes.signUpContainer} />
		</div>
	);
}
