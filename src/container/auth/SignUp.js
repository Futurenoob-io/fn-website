import React, { useState } from 'react';
import AuthForm from '../../baseComponents/form/AuthForm';

export default function SignUp() {
	const data = {
		username: ''
	};

	return (
		<AuthForm data={data} formId={'signUp'} actionLabel={'Sign Up'} showLabel={false} displayType={'singleRow'} />
	);
}
