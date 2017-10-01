import types from './types';

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