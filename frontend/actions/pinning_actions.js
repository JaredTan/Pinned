import * as APIUtil from '../util/pinning_api_util';

export const RECEIVE_PINNING = "RECEIVE_PINNING";
export const REMOVE_PINNING = "REMOVE_PINNING";

import { receiveSinglePin } from './pin_actions';
import { receiveSingleBoard } from './board_actions';

export const createPinning = (pinning) => (dispatch) => {
  return APIUtil.createPinning(pinning).then(
    pin => dispatch(receiveSinglePin(pin))
  );
};

export const deletePinning = (pinning) => (dispatch) => {
  return APIUtil.deletePinning(pinning).then(
    board => dispatch(receiveSingleBoard(board))
  );
};
