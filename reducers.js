 const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        value: state.value + 1
      };
    default:
      return state;
  }
};

export default reducer;
