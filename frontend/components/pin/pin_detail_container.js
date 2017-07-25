import { connect } from 'react-redux';
import { requestSinglePin, resetPin, removePin } from '../../actions/pin_actions';
import PinDetail from './pin_detail';

const mapStateToProps = ({pins}) => {
  return {pin: pins.entities[pins.currentPin]}
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: id => dispatch(requestSinglePin(id)),
  resetPin: () => dispatch(resetPin()),
  removePin: pin => dispatch(removePin(pin))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinDetail);
