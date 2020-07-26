import axios from 'axios';

const axisRef = axios.create({
	baseURL: 'https://some-domain.com/api/',
	timeout: 1000
});

const urlMap = {
	signIn: () => '/auth/signIn',
	signOut: () => '/auth/signOut',
	signUp: () => '/auth/signUp',
	changePassword: () => '/auth/changePassword',
	forgotPassword: () => '/auth/forgotPassword',
	settings: () => '/settings'
};

function postData(reqKey, body, reqParams) {
	const postURL = urlMap[reqKey](reqParams);
	let res;
	try {
		// Load async data from an inexistent endpoint.
		return axisRef.post(postURL, body);
	} catch (e) {
		console.log(` Axios request failed: ${e}`);
		return e;
	}
}

const API = {
	auth: (key, body) => postData(key, body)
};

export default API;
