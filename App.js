import { connect } from 'react-redux';
import { incrementCounter } from '../actions';

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

