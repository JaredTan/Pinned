import { connect } from 'react-redux';
import { requestSinglePin } from '../../actions/pin_actions';
import PinDetail from './pin_detail';

const mapStateToProps = {pin} => ({
  pin
});

const mapDispatchToProps = dispatch => ({
  requestSinglePin: id => dispatch(requestSinglePin(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(PinDetail);
