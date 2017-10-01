import types from './NewEndpointTypes';

const addNew = endPoint => ({
	type: types.SUBMIT_NEW_ENDPOINT,
	endPoint
});

const cancelNew = () => ({
	type: types.CANCEL_NEW_ENDPOINT
});

const updateVal = (e) => ({
	type: 'update',
	endpointVal: e.target.value
});

export default {
	addNew,
	cancelNew,
	updateVal
};