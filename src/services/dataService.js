import fetch from 'cross-fetch'
import * as types from '../actions/types'

const RECEIVED = '_RECEIVED'
const ERROR = '_ERROR'
const URL = process.env.PUBLIC_URL || ''

const getApiGenerator = next => (route, action, result = 'json') =>
  fetch(route)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      switch(result) {
        case 'text':
          return res.text()
        default:
          return res.json()
      }
    })
    .then(data => {
      return next({
        ...action, 
        type: getReceivedAction(action.type),
        data
      });
    })
    .catch(error => {
      return next({
        ...action, 
        type: getErrorAction(action.type),
        error
      })
    })

const dataService = () => next => action => {
  next(action)
  const getApi = getApiGenerator(next)
  switch (action.type) {
    case types.GET_PAGE_DESCRIPTION:
      return getApi(URL + '/data/html/' + action.id, action, 'text')
    case types.GET_SITE_DATA:
      return getApi(URL + '/data/site.json', action)
    case types.GET_PAGE_DATA:
      return getApi(URL + '/data/' + action.pageId + '.json', action)
    default:
  }
};

export const getErrorAction = name => `${name}${ERROR}`
export const getReceivedAction = name => `${name}${RECEIVED}`
export default dataService
