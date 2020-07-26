import React, { useState } from 'react';
import AuthForm from '../../baseComponents/form/AuthForm';

export default function ChangePassword() {
	const data = {
		username: '',
		current_password: '',
		password: '',
		new_password: ''
	};

	return <AuthForm data={data} formId={'chnagePassword'} />;
}
