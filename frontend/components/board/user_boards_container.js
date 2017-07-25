import { connect } from 'react-redux';
import { requestAllBoards, createBoard } from '../../actions/board_actions';
import { selectAllBoards } from '../../reducers/selectors';
import UserBoards from './user_boards';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});


const mapDispatchToProps = dispatch => ({
  requestAllBoards: (userId) => dispatch(requestAllBoards(userId)),
  createBoard: () => dispatch(createBoard())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBoards);
