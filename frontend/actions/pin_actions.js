import * as APIUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_SINGLE_PIN = "RECEIVE_SINGLE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RESET_PIN = "RESET PIN";

export const receiveAllPins = (pins) => {
  return {
  type: RECEIVE_ALL_PINS,
  pins
}
};

export const receiveSinglePin = (pin) => ({
  type: RECEIVE_SINGLE_PIN,
  pin
});

export const requestAllPins = () => (dispatch) => {
  return APIUtil.fetchAllPins().then(
    pins => dispatch(receiveAllPins(pins))
  );
};

export const requestSinglePin = id => (dispatch) => {
  return APIUtil.fetchSinglePin(id).then(
    pin => dispatch(receiveSinglePin(pin))
  );
};

export const createPin = (pin) => (dispatch) => {
  return APIUtil.createPin(pin).then(
    pin => dispatch(receiveSinglePin(pin))
  );
};

export const removePin = pin => ({
  type: REMOVE_PIN,
  pin
});

export const resetPin = () => ({
  type: RESET_PIN
})
