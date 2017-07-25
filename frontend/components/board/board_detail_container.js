import { connect } from 'react-redux';
import { requestSingleBoard, resetBoard, deleteBoard } from '../../actions/board_actions';
import BoardDetail from './board_detail';

const mapStateToProps = (state) => {
  return {
    board: state.boards,
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleBoard: id => dispatch(requestSingleBoard(id)),
  resetBoard: () => dispatch(resetBoard()),
  deleteBoard: board => dispatch(deleteBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDetail);
