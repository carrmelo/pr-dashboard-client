import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import api from './middleware/api';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index'

import './sass/main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { BrowserRouter as Router, Route } from 'react-router-dom'


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(api)
)

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

