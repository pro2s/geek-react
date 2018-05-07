import fetch from 'cross-fetch'
import * as types from '../constants/appActionTypes'

const RECEIVED = '_RECEIVED';
const ERROR = '_ERROR';

const getApiGenerator = next => (route, name) => fetch(route)
	.then(res => {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	})
	.then(data => {
		return next({
			type: getReceivedAction(name),
			data
		})
	})
	.catch(err => {
		return next({
			type: getErrorAction(name),
			err
		})
	})

const postApiGenerator = next => (route, data, name) => fetch(route, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
		"Content-Type": "application/json"
		},
	})
	.then(res => {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	})
	.then((postData) => {
		return next({
			type: getReceivedAction(name),
			...postData
		})
	})
	.catch(err => {
		return next({
			type: getErrorAction(name),
			err
		})
	})

const dataService = () => next => action => {
	next(action)
	const getApi = getApiGenerator(next)
	const postApi = postApiGenerator(next)
	switch (action.type) {
		case types.GET_SITE_DATA:
			return getApi('./data/site.json', types.GET_SITE_DATA)
		case types.GET_PAGE:
			return postApi('./data/page.json', types.GET_PAGE)
		default:
			break
	}
};

export const getErrorAction = (name) => `${name}${ERROR}`;
export const getReceivedAction = (name) => `${name}${RECEIVED}`;
export default dataService
