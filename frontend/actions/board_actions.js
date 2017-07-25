import * as APIUtil from '../util/board_api_util';

export const RECEIVE_ALL_BOARDS = "RECEIVE_ALL_BOARDS";
export const RECEIVE_SINGLE_BOARD = "RECEIVE_SINGLE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RESET_BOARD = "RESET BOARD";

export const receiveAllBoards = (boards) => {
  return {
  type: RECEIVE_ALL_BOARDS,
  boards
}
};

export const receiveSingleBoard = (board) => ({
  type: RECEIVE_SINGLE_BOARD,
  board
});

export const requestAllBoards = (userId) => (dispatch) => {
  return APIUtil.fetchAllBoards(userId).then(
    boards => dispatch(receiveAllBoards(boards))
  );
};

export const requestSingleBoard = id => (dispatch) => {
  return APIUtil.fetchSingleBoard(id).then(
    board => dispatch(receiveSingleBoard(board))
  );
};

export const createBoard = (board) => (dispatch) => {
  return APIUtil.createBoard(board).then(
    board => dispatch(receiveSingleBoard(board))
  );
};

export const removeBoard = board => ({
  type: REMOVE_BOARD,
  board
});

export const resetBoard = () => ({
  type: RESET_BOARD
})
