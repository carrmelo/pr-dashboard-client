import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import api from './middleware/api';

import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';

import reducer from './reducers/index'

import './sass/main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(/*thunk,*/ api, createLogger())
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
	    <App />
    </MuiThemeProvider>
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();