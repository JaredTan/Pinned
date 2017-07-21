import { connect } from 'react-redux';
import { requestSinglePin, resetPin } from '../../actions/pin_actions';
import PinDetail from './pin_detail';

const mapStateToProps = ({pins}) => {
  return {pin: pins.entities[pins.currentPin]}
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: id => dispatch(requestSinglePin(id)),
  resetPin: () => dispatch(resetPin())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinDetail);
