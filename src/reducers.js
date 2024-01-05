const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  console.log({action})
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        value: state.value + 1
      };
    case 'INCREMENT_COUNTER_PAYLOAD':
      return {
        ...state,
        value: state.value + action.payload.count
      };
    default:
      return state;
  }
};

export default reducer;
