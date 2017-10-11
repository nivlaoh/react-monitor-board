import types from './NewEndpointTypes';

const addNew = (props, history) => {
	history.push('/');
	return ({
		type: types.SUBMIT_NEW_ENDPOINT,
		endpointName: props.endpointName,
		endpointVal: props.endpointVal
	});
};

const cancelNew = () => ({
	type: types.CANCEL_NEW_ENDPOINT
});

const updateVal = (e) => {
	return ({
		type: types.UPDATE_FIELD,
		fieldName: e.target.id,
		fieldValue: e.target.value
	});
};

export default {
	addNew,
	cancelNew,
	updateVal
};