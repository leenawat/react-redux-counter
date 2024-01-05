import { connect } from 'react-redux';
import { incrementCounter } from '../actions';

const MyCounter = ({ value, incrementCounter }) => (
  <div>
    <p>Count: {value}</p>
    <button onClick={incrementCounter}>Increment</button>
  </div>
);

const mapStateToProps = state => ({
  value: state.value
});
//Using object shorthand notation
const mapDispatchToProps = {
 incrementCounter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCounter);
