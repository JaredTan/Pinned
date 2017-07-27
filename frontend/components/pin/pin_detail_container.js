import { connect } from 'react-redux';
import { requestSinglePin, resetPin, deletePin } from '../../actions/pin_actions';
import { requestSingleUser } from '../../actions/user_actions';
import { requestSingleBoard } from '../../actions/board_actions';
import { createPinning, deletePinning } from '../../actions/pinning_actions';
import { withRouter } from 'react-router-dom';
import PinDetail from './pin_detail';

const mapStateToProps = ({pins, session, boards, users}) => {
  return {
    pin: pins.entities[pins.currentPin],
    currentUser: session.currentUser,
    user: users,
    boards
  }
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: id => dispatch(requestSinglePin(id)),
  resetPin: () => dispatch(resetPin()),
  deletePin: pin => dispatch(deletePin(pin)),
  createPinning: pinning => dispatch(createPinning(pinning)),
  deletePinning: pinning => dispatch(deletePinning(pinning)),
  requestSingleUser: user => dispatch(requestSingleUser(user)),
  requestSingleBoard: id => dispatch(requestSingleBoard(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinDetail));
