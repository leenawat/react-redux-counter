import { connect } from 'react-redux';

const MyCounter = ({ value, incrementCounter, incrementCounterPayload }) => (
  <div>
    <p>Count: {value}</p>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={() => incrementCounterPayload(2)}>Increment by 2</button>
  </div>
);

const mapStateToProps = (state) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => dispatch({ type: 'INCREMENT_COUNTER' }),
  incrementCounterPayload: (count) => dispatch({ type: 'INCREMENT_COUNTER_PAYLOAD', payload: { count } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCounter);
