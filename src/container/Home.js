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
	return <div>homes</div>;
}
