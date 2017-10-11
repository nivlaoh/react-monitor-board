import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NewEndpointReducers from './new-endpoint/NewEndpointReducers';

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
	},
	cards: [
		{
			checked: true,
			actions: null,
			data: {}
		},
		{
			checked: false,
			actions: null,
			data: {}
		}
	]
};
defaultState.cards[0].data = defaultState.data;
defaultState.cards[1].data = defaultState.data;

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
		default:
	}
	return state;
};

const mainReducer = combineReducers({
	reducer,
	newEndpoint: NewEndpointReducers
});

const store = createStore(mainReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
