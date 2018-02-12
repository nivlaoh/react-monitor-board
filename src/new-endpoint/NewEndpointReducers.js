import types from './NewEndpointTypes';

const initialState = {
  endpointName: '',
  endpointVal: '',
  endpointDesc: '',
  cards: [],
};

const defaultData = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
  }],
  labels: [
    'Red',
    'Yellow',
    'Blue',
  ],
};

const submitReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_NEW_ENDPOINT:
      console.log('action', action);
      const foundInd = state.cards.findIndex(card => card.id === action.id);
      console.log('ind', foundInd);
      return {
        ...state,
        cards: [
          ...state.cards.splice(0, foundInd),
          {
            id: state.cards.length,
            open: false,
            endpointName: action.endpointName,
            endpointDesc: action.endpointDesc,
            endpointVal: action.endpointVal,
            anchorEl: null,
            data: { ...defaultData },
          },
          ...state.cards.splice(foundInd + 1),
        ],
      };
    case types.UPDATE_FIELD:
      switch (action.fieldName) {
        case 'endpointName':
          return {
            ...state,
            endpointName: action.fieldValue,
          };
        case 'endpointDesc':
          return {
            ...state,
            endpointDesc: action.fieldValue,
          };
        case 'endpointVal':
          return {
            ...state,
            endpointVal: action.fieldValue,
          };
        default:
          return state;
      }
    case types.OPEN_MENU:
      const openCards = state.cards.map((item) => {
        const itemCopy = { ...item };
        if (item.id === action.id) {
          itemCopy.open = true;
        }
        return itemCopy;
      });
      return {
        ...state,
        cards: openCards,
      };
    case types.CLOSE_MENU:
      const closeCards = state.cards.map((item) => {
        const itemCopy = { ...item };
        if (item.id === action.id) {
          itemCopy.open = false;
        }
        return itemCopy;
      });
      return {
        ...state,
        cards: closeCards,
      };
    case types.REMOVE_CARD:
      const filtered = state.cards.filter(item => item.id !== action.id);
      return {
        ...state,
        cards: [...filtered],
      };
    default:
      return state;
  }
};

export default submitReducer;
