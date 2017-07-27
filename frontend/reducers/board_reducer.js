import merge from 'lodash/merge';
import {RECEIVE_SINGLE_BOARD, REMOVE_BOARD} from '../actions/board_actions';



const boardReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SINGLE_BOARD:
      return merge({}, action.board);
    case REMOVE_BOARD:
      const boardId = action.board.id
      const dupState = merge({}, state);
      delete dupState[boardId]
      return dupState
    default:
      return state;
  }
}

export default boardReducer;
