import React, { useState } from 'react';
import AuthForm from '../../baseComponents/form/AuthForm';

export default function SignIn() {
	const data = {
		username: '',
		password: ''
	};

	return <AuthForm data={data} />;
}
