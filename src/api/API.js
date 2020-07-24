import axios from 'axios';

const axisRef = axios.create({
	baseURL: 'https://some-domain.com/api/',
	timeout: 1000
});

const urlMap = {
	signIn: () => '/user/signIn',
	signOut: () => '/user/signOut',
	signUp: () => '/user/signUp',
	changePassword: () => '/user/changePassword',
	settings: () => '/settings'
};

const postData = ({ url, body, urlParams = {} }) => {
	const postURL = urlMap(url);
	return axisRef.post(postURL, body);
};

const API = {
	signUp: ({ userName, email, phone }) => postData({ req: 'signUp', body: { userName, email, phone } }),
	signIn: ({ userName, email, phone }) => postData({ req: 'signIn', body: { userName, password } }),
	signOut: ({ userName, email, phone }) => postData({ req: 'signOut', body: { userName } }),
	changePassword: ({ userName, email, phone }) =>
		postData({ req: 'changePassword', body: { userName, password, newPassword } }),
	resetPassword: ({ userName }) => postData({ req: 'resetPassword', body: { userName } })
};

export default API;
