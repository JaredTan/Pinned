import { connect } from 'react-redux';
import { createPin, receivePinErrors, resetPinErrors } from '../../actions/pin_actions';
import PinCreateForm from './pin_create_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.pins,
    currentUser: state.session.currentUser,
    ownProps
  }
}

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin)),
  receivePinErrors: (errors) => dispatch(receivePinErrors(errors)),
  resetPinErrors: () => dispatch(resetPinErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinCreateForm);
