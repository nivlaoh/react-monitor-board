import { combineReducers } from 'redux';
import types from './types';

const loadReducer = (state = false, action) => {
	switch (action.type) {
		case types.LOAD: return true;
		default: return state;
	}
};

const dashboardReducer = combineReducers({
	load: loadReducer
});

export default dashboardReducer;