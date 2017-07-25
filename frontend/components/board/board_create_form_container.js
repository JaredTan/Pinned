import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardCreateForm from './board_create_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.boards.errors,
    currentUser: state.session.currentUser,
    ownProps
  }
}

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreateForm);
