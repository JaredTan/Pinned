import { connect } from 'react-redux';
import { requestAllBoards } from '../../actions/board_actions';
import { selectAllBoards } from '../../reducers/selectors';
import BoardsIndex from './boards_index';


const mapDispatchToProps = dispatch => ({
  requestAllBoards: () => dispatch(requestAllBoards())
});

export default connect(null, mapDispatchToProps)(BoardsIndex);
