import merge from 'lodash/merge';
import {RECEIVE_SINGLE_BOARD, REMOVE_BOARD, RESET_BOARD} from '../actions/board_actions';



const boardsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SINGLE_BOARD:
      return merge({}, action.board);
    case REMOVE_BOARD:
      const boardID = action.board.id
      const dupState = merge({}, state);
      delete dupState[boardID]
      return dupState
    case RESET_BOARD:
      return merge({}, state, {currentBoard: {}});
    default:
      return state;
  }
}

export default boardsReducer;
