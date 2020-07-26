import React, { useState } from 'react';
import AuthForm from '../baseComponents/form/AuthForm';

function registrationForm() {
	const data = {
		firstname: '',
		lastname: '',
		username: ''
	};

	return <AuthForm data={data} />;
}

export default function Hackathon() {
	return (
		<div>
			<h1> Registration </h1>
			{registrationForm()}
		</div>
	);
}
