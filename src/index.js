import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './sass/main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>, 
	document.getElementById('root'));
registerServiceWorker();




// .header__config-button {
//     width: 75px;
//     background: rgba(255, 255, 255, 0.7);
//     border-radius: 100px;
//     border: -3px solid black;
//     position: absolute;
//     right: 25px;
// }

// svg.header__config-icon {
//     width: 100%;
//     height: 4rem;
//     display: flex;
//     flex-direction: row;
//     /* justify-content: center; */
//     /* align-self: center; */
//     fill: black;
// }
