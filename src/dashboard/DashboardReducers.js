import types from './DashboardTypes';

const loadReducer = (state = false, action) => {
	switch (action.type) {
		case types.LOAD: return true;
		default: return state;
	}
};

export default loadReducer;