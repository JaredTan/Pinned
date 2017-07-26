import { connect } from 'react-redux';
import { requestSinglePin, resetPin, deletePin } from '../../actions/pin_actions';
import { requestSingleUser } from '../../actions/user_actions';
import { createPinning } from '../../actions/pinning_actions';
import PinDetail from './pin_detail';

const mapStateToProps = ({pins, session, boards, users}) => {
  return {
    pin: pins.entities[pins.currentPin],
    currentUser: session.currentUser,
    user: users.chosenUser,
    boards
  }
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: id => dispatch(requestSinglePin(id)),
  resetPin: () => dispatch(resetPin()),
  deletePin: pin => dispatch(deletePin(pin)),
  createPinning: pinning => dispatch(createPinning(pinning)),
  requestSingleUser: user => dispatch(requestSingleUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinDetail);
