import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import site, { sections, description, subscribe } from './site';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  counter,
  site,
  description,
  sections,
  subscribe
});
