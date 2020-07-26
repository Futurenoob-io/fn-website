import React, { useState } from 'react';
import AuthForm from '../../baseComponents/form/AuthForm';
import Title from '../../baseComponents/Title';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '10px',
		background: 'linear-gradient(180deg, #0558F0 10.42%, rgba(20, 0, 255, 0.6) 100%)',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		borderRadius: '6px',
		borderRadius: '6px'
	}
});

export default function SignUp() {
	const data = {
		username: ''
	};
	const signUpTitle = 'Ready to see what we are building?';
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Title title={signUpTitle} type={'signUpTitle'} />
			<AuthForm
				data={data}
				formId={'signUp'}
				actionLabel={'Sign Up'}
				showLabel={false}
				displayType={'singleRow'}
			/>
		</div>
	);
}
