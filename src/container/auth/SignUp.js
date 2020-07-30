import React, { useState } from 'react';
import AuthForm from '../../baseComponents/form/AuthForm';
import Title from '../../baseComponents/Title';

export default function SignUp({ signUpTitle, className }) {
	const data = {
		username: ''
	};

	return (
		<div className={className}>
			<Title title={signUpTitle} color={'secondary'} />
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
