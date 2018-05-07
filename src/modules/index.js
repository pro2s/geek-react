import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import site from './site';

export default combineReducers({
  router: routerReducer,
  counter,
  site
});
