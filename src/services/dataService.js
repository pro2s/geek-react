import fetch from 'cross-fetch'
import * as types from '../constants/appActionTypes'

const RECEIVED = '_RECEIVED'
const ERROR = '_ERROR'
const URL = process.env.PUBLIC_URL || ''

const getApiGenerator = next => (route, name, initAction = {}) =>
  fetch(route)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      return res.json();
    })
    .then(data => {
      return next({
        type: getReceivedAction(name),
        data,
        initAction
      });
    })
    .catch(err => {
      return next({
        type: getErrorAction(name),
        err,
        initAction
      });
    });
/*
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
*/
const dataService = () => next => action => {
  next(action);
  const getApi = getApiGenerator(next);
  // const postApi = postApiGenerator(next)
  switch (action.type) {
    case types.GET_SITE_DATA:
      return getApi(URL + '/data/site.json', types.GET_SITE_DATA)
    case types.GET_PAGE_DATA:
      return getApi(
        URL + '/data/' + action.pageId + '.json',
        types.GET_PAGE_DATA,
        action
      );
    default:
      break
  }
};

export const getErrorAction = name => `${name}${ERROR}`
export const getReceivedAction = name => `${name}${RECEIVED}`
export default dataService
