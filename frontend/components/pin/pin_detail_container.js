import { connect } from 'react-redux';
import { requestSinglePin, resetPin, deletePin } from '../../actions/pin_actions';
import { requestSingleUser } from '../../actions/user_actions';
import { requestSingleBoard} from '../../actions/board_actions';
import { createPinning, deletePinningInPinDiffBoard, deletePinningInPinSameBoard, deletePinningInBoard } from '../../actions/pinning_actions';
import { withRouter } from 'react-router-dom';
import PinDetail from './pin_detail';

const mapStateToProps = ({pins, session, board, user}) => {
  return {
    pin: pins.entities[pins.currentPin],
    currentUser: session.currentUser,
    user,
    board
  }
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: id => dispatch(requestSinglePin(id)),
  resetPin: () => dispatch(resetPin()),
  deletePin: pin => dispatch(deletePin(pin)),
  createPinning: pinning => dispatch(createPinning(pinning)),
  deletePinningInPinDiffBoard: pinning => dispatch(deletePinningInPinDiffBoard(pinning)),
  deletePinningInPinSameBoard: pinning => dispatch(deletePinningInPinSameBoard(pinning)),
  deletePinningInBoard: pinning => dispatch(deletePinningInBoard(pinning)),
  requestSingleUser: user => dispatch(requestSingleUser(user)),
  requestSingleBoard: id => dispatch(requestSingleBoard(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinDetail));
