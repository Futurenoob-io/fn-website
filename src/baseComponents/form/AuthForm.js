import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import API from '../../api/API';
import {
	validateEmail,
	validatePassword,
	validatePasswords,
	validateIsNonEmtpy,
	formParams
} from '../../lib/js/formHelpers';
import Button from './Button';
import Label from './Label';

export default function Auth({ data, formId, showPlaceholder = false, showLabel = true }) {
	const [ form, setValues ] = useState(data);
	const [ isLoading, setIsLoading ] = useState({});
	const [ errors, setErrors ] = useState({});

	function validateForm() {
		const isValid = (key) => {
			return formParams[key]['isValid'](form);
		};
		return Object.keys(data).every(isValid);
	}

	function updateField(e) {
		const value = e.target.value;
		setValues({
			...form,
			[e.target.name]: e.target.value
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		const isValid = validateForm();
		if (!isValid) return;
		try {
			API.auth(formId, form).then().catch((e) => console.log(e));
		} catch (error) {
			console.log(e);
		}
	}
	function RenderInputValue(inputKey, index) {
		const formInputValue = form[inputKey];
		const { label, type } = formParams[inputKey];
		let autofocus = false;
		let placeholder = showPlaceholder ? label : '';

		if (index === 0) autofocus = true;
		return (
			<div key={inputKey}>
				{showLabel && <Label label={label} value={inputKey} htmlFor={inputKey} />}
				{type === 'password' ? (
					<input
						value={formInputValue}
						name={inputKey}
						type={inputKey}
						onChange={updateField}
						autoFocus={autofocus}
						placeholder={label}
					/>
				) : (
					<input
						value={formInputValue}
						name={inputKey}
						onChange={updateField}
						autoFocus={autofocus}
						placeholder={label}
					/>
				)}
			</div>
		);
	}

	const listItems = Object.keys(data).map(RenderInputValue);
	return (
		<form onSubmit={handleSubmit}>
			{listItems}
			<Button isDisabled={!validateForm()} isLoading={isLoading} label={'Submit'} />
		</form>
	);
}
