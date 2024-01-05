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

// 1 long version
// const mapDispatchToProps = (dispatch) => ({
//   incrementCounter: () => dispatch({ type: 'INCREMENT_COUNTER' }),
//   incrementCounterPayload: (count) => dispatch({ type: 'INCREMENT_COUNTER_PAYLOAD', payload: { count } })
// });

// 2 short version
const mapDispatchToProps = {
  incrementCounter: () => ({ type: 'INCREMENT_COUNTER' }),
  incrementCounterPayload: (count) => ({ type: 'INCREMENT_COUNTER_PAYLOAD', payload: { count } })
 };

 // 3 split code version
 // 3.1 create action.js and export 2 function name like dispath name
//  export const incrementCounter = () => {
//   return {
//     type: 'INCREMENT_COUNTER'
//   }
// }
// export const incrementCounterPayload = (count) => {
//   return {
//     type: 'INCREMENT_COUNTER_PAYLOAD',
//     payload: {
//       count: count
//     }
//   }
// }
//  // 3.2 and use below
//  const mapDispatchToProps = {
//   incrementCounter,
//   incrementCounterPayload
//  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCounter);
