import axios from 'axios';

// axios.defaults.baseURL = 'https://api-recharge-bo-zb1-test.herokuapp.com';
axios.defaults.baseURL = ' https://api-virtual-zb1-test.herokuapp.com';

export const setAuthHeaders = () =>
	(axios.defaults.headers.common = { 'Authorization': localStorage.getItem('jwtToken') });

export const removeAuthHeader = () => delete axios.defaults.headers.common['Authorization'];

export class Api {
	static getInstance() {
		return new Api();
	}

	get(url, options) {
		setAuthHeaders();
		return axios.get(`${url}`, options);
	}

	put(url, data) {
		setAuthHeaders();
		return axios.put(`${url}`, data);
	}

	post(url, data, options) {
		options && options.isPublic ? removeAuthHeader() : setAuthHeaders();

		return axios.post(`${url}`, data);
	}

	patch(url, data) {
		setAuthHeaders();
		return axios.patch(`${url}`, data);
	}

	delete(url) {
		setAuthHeaders();
		return axios.delete(`${url}`);
	}
}
