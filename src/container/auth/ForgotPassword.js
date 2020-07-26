import React, { useState } from 'react';
import AuthForm from '../../baseComponents/form/AuthForm';

export default function SignIn() {
	const data = {
		username: ''
	};
	return <AuthForm data={data} formId={'forgotPassword'} formDisplayType="singleRow" showPlaceholder={true} />;
}
