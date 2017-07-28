import merge from 'lodash/merge';
import {RECEIVE_SINGLE_BOARD, REMOVE_BOARD} from '../actions/board_actions';



const boardReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SINGLE_BOARD:
      return action.board;
    case REMOVE_BOARD:
     return {};
    default:
      return state;
  }
}

export default boardReducer;
