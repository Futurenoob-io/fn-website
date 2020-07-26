const validateEmail = (email) => {
	const isValidLength = email.length > 6;
	const isValidEmail = /\S+@\S+\.\S+/.test(email);
	const isValid = isValidLength && isValidEmail;
	let msg = null;
	if (!isValid) {
		msg = 'Email address is invalid';
	}
	return {
		isValid,
		msg
	};
};

const validatePassword = (password) => {
	const isValidLength = password.length > 6;
	const isValid = isValidLength;
	let msg = null;
	if (!isValid) {
		if (!isValidLength) {
			msg = 'Password is required';
		}
	}
	return {
		isValid,
		msg
	};
};
const validatePasswords = (a, b) => {
	if ((a !== null) & (b !== null) & (a !== b)) {
		return {
			isValid: false,
			msg: 'New Passwords should match'
		};
	}
	const { isValid: isValidA, msg: msgA } = validatePassword(a);
	const { isValid: isValidB } = validatePassword(b);
	const isValid = isValidA && isValidB && a === b;
	let msg;
	if (!isValidA) {
		msg = msgA;
	} else if (a !== b) {
		msg = 'Passwords should match';
	}
	return {
		isValid,
		msg
	};
};
const validateIsNonEmtpy = (a, key) => {
	const isValid = a !== null && a.length > 0;
	let msg;
	if (!isValid) {
		msg = `${key} is Empty`;
	}
	return {
		isValid,
		msg
	};
};
const formParams = {
	username: {
		label: 'Email',
		isValid: ({ username }) => validateEmail(username).isValid,
		type: 'email'
	},
	current_password: {
		type: 'password',
		label: 'Current Password:',
		isValid: ({ currrent_password }) => validatePassword(currrent_password).isValid
	},
	password: {
		type: 'password',
		label: 'Password',
		isValid: ({ password }) => validatePassword(password).isValid
	},
	new_password: {
		type: 'password_new',
		label: 'Repeat New Password:',
		isValid: ({ password, password_new }) => validatePasswords(password, password_new).isValid
	},
	firstname: {
		label: 'First Name',
		isValid: ({ firstname }) => validateIsNonEmtpy(firstname, 'First Name').isValid,
		type: 'text'
	},
	lastname: {
		label: 'Last Name:',
		isValid: ({ lastname }) => validateIsNonEmtpy(lastname, 'Last Name').isValid,
		type: 'text'
	}
};
export { validateEmail, validatePassword, validatePasswords, validateIsNonEmtpy, formParams };
