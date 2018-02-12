import types from './NewEndpointTypes';

const addNew = (props, history, e) => {
  history.push('/');
  return ({
    type: types.SUBMIT_NEW_ENDPOINT,
    id: props.id,
    endpointName: props.endpointName,
    endpointDesc: props.endpointDesc,
    endpointVal: props.endpointVal,
    anchorEl: e,
  });
};

const cancelNew = () => ({
  type: types.CANCEL_NEW_ENDPOINT,
});

const updateVal = (e) => {
  return ({
    type: types.UPDATE_FIELD,
    fieldName: e.target.id,
    fieldValue: e.target.value,
  });
};

export default {
  addNew,
  cancelNew,
  updateVal,
};
