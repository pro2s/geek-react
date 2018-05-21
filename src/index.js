import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import store, { history } from './store';
import App from './containers/app';
import * as types from './actions/types';

import 'sanitize.css/sanitize.css';
import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  target
);

store.dispatch({ type: types.GET_SECTIONS });
