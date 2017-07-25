import { connect } from 'react-redux';
import { requestAllPins } from '../../actions/pin_actions';
import { requestSingleBoard, deleteBoard } from '../../actions/board_actions';
import { selectAllPins } from '../../reducers/selectors';
import PinsIndex from './pins_index';

const mapStateToProps = (state) => {
  return {
    pins: selectAllPins(state.pins),
    board: state.boards,
    currentUserId: state.session.currentUser.id
  }
};

const mapDispatchToProps = dispatch => ({
  requestSingleBoard: boardId => dispatch(requestSingleBoard(boardId)),
  requestAllPins: () => dispatch(requestAllPins()),
  deleteBoard: (board) => dispatch(deleteBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinsIndex);
