import merge from 'lodash/merge';
import {RECEIVE_ALL_PINS, RECEIVE_SINGLE_PIN, REMOVE_PIN, RESET_PIN} from '../actions/pin_actions';

const defaultState = () => ({
  entities: {},
  currentPin: {}
})

const pinsReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return merge({}, state, {entities: action.pins});
    case RECEIVE_SINGLE_PIN:
      const pin = action.pin;
      let newState = merge({}, state);
      newState.currentPin = pin.id;
      newState.entities[pin.id] = pin;
      return newState;
    case RESET_PIN:
      return merge({}, state, {currentPin: {}});
    case REMOVE_PIN:
      const pinID = action.pin.id
      const dupState = merge({}, state);
      delete dupState.entities[pinID]
      return dupState
    default:
      return state;
  }
};

export default pinsReducer;
