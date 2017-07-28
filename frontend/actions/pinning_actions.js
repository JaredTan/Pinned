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

export const deletePinningInBoard = (pinning) => (dispatch) => {
  return APIUtil.deletePinning(pinning).then(
    entities => dispatch(receiveSingleBoard(entities.board))
  );
};

export const deletePinningInPinDiffBoard = (pinning) => (dispatch) => {
  return APIUtil.deletePinning(pinning).then(
    entities => dispatch(receiveSinglePin(entities.pin))
  );
};

export const deletePinningInPinSameBoard = pinning => dispatch => {
  return APIUtil.deletePinning(pinning).then(
    entities => (
      dispatch(receiveSinglePin(entities.pin)),
      dispatch(receiveSingleBoard(entities.board))
    )
  );
};
