import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { requestSingleUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import BoardCreateForm from './board_create_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.board.errors,
    currentUser: state.session.currentUser,
    ownProps
  }
}

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),
  requestSingleUser: userId => dispatch(requestSingleUser(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardCreateForm));
