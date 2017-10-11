import types from './NewEndpointTypes';

const initialState = {
	endpointName: '',
	endpointVal: '',
	cards: []
};

const submitReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SUBMIT_NEW_ENDPOINT:
			console.log('see action', action);
			return Object.assign({}, state, {
				endpointName: action.endpointName,
				endpointVal: action.endpointVal,
				cards: [...state.cards, {
					actions: null,
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
				}],
				navigate: true
			});
		case types.UPDATE_FIELD:
			console.log('here', action);
			switch (action.fieldName) {
				case 'endpointName':
					return Object.assign({}, state, {
						endpointName: action.fieldValue
					});
				case 'endpointVal':
					return Object.assign({}, state, {
						endpointVal: action.fieldValue
					});
				default:
			}
		default:
			return state;
	}
};

export default submitReducer;