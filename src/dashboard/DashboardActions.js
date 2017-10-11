import types from './DashboardTypes';

const open = () => ({
	type: types.OPEN
});

const check = () => ({
	type: types.CHECK
});

export default {
	open,
	check
};