import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import api from './middleware/api';
import reducer from './reducers/index'
import { loadState, saveState } from './helpers/localStorage'
import throttle from 'lodash/throttle'

import './sass/main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { BrowserRouter as Router, Route } from 'react-router-dom'

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(logger, api))
)

// Listen to the changes on the state
// and saves them, no more than one time per second
store.subscribe(throttle(() => {
  const { authentication } = store.getState();
  if (authentication.isAuthenticated)
    saveState({
      authentication
    });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
  		<Router>
  			<Route path="/" component={App} />
  		</Router>
    </MuiThemeProvider>
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();
