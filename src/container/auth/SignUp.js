import React, { useState } from 'react';
import AuthForm from '../../baseComponents/form/AuthForm';

export default function SignIn() {
	const data = {
		firstname: '',
		lastname: '',
		username: ''
	};

	return <AuthForm data={data} formId={'signUp'} />;
}
