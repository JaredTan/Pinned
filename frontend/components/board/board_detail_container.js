import { connect } from 'react-redux';
import { requestSingleBoard, resetBoard } from '../../actions/board_actions';
import BoardDetail from './board_detail';

const mapStateToProps = ({boards}) => {
  return {board: boards.entities[boards.currentBoard]}
};

const mapDispatchToProps = dispatch => ({
  requestSingleBoard: id => dispatch(requestSingleBoard(id)),
  resetBoard: () => dispatch(resetBoard())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDetail);
