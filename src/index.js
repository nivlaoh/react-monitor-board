import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const defaultState = {
	appName: 'Monitor-app',
	checked: false,
	open: false,
	page: '/',
	data: {
		datasets: [{
			data: [10, 20, 30],
			backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			],
			hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			]
		}],
		labels: [
			'Red',
			'Yellow',
			'Blue'
		]
	}
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'check':
			return Object.assign({}, state, {
				checked: !state.checked
			});
		case 'open':
			return Object.assign({}, state, {
				open: !state.open
			});
		case 'submit':
			console.log('here', action);
			return Object.assign({}, state, {
				page: '/'
			});
		case 'update':
			console.log('there', action);
			return Object.assign({}, state, {
				endpointVal: action.endpointVal
			});
		default:
	}
	return state;
};

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
