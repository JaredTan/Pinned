import { connect } from 'react-redux';
import { requestAllBoards } from '../../actions/board_actions';
import { selectAllBoards } from '../../reducers/selectors';
import BoardsIndex from './boards_index';

const mapStateToProps = ({ boards }) => {
  return {boards: selectAllBoards(boards)}
};

const mapDispatchToProps = dispatch => ({
  requestAllBoards: () => dispatch(requestAllBoards())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsIndex);
