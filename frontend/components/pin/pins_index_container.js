import { connect } from 'react-redux';
import { requestAllPins } from '../../actions/pin_actions';
import { selectAllPins } from '../../reducers/selectors';
import PinsIndex from './pins_index';

const mapStateToProps = ({ pins }) => ({
  pins: selectAllPins(pins)
});

const mapDispatchToProps = dispatch => ({
  requestAllPins: () => dispatch(requestAllPins())
});

export default connect(mapStateToProps,  mapDispatchToPropspi)(PinsIndex);
