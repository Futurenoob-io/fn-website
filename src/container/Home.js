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
		background: 'linear-gradient(180deg, #FFFFFF 72.3%, rgba(5, 88, 240, 0.65) 100%)',
		boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.25)',
		...wrapper
	},
	signUpContainer: {
		background: 'linear-gradient(180deg, #0558F0 10.42%, rgba(20, 0, 255, 0.6) 100%)',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
