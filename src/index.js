import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import repos from './reducer/index';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let store = createStore(
  repos,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
