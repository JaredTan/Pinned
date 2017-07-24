import merge from 'lodash/merge';
import {RECEIVE_ALL_PINS, RECEIVE_SINGLE_PIN, REMOVE_PIN, RESET_PIN} from '../actions/pin_actions';

const defaultState = () => ({
  entities: {},
  currentPin: {},
  errors: []
})

const pinsReducer = (state = defaultState(), action) => {
  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return merge({}, state, {entities: action.pins});
    case RECEIVE_SINGLE_PIN:
      const pin = action.pin;

      return merge({}, state, {
        entities: { [pin.id]: pin },
        currentPin: pin.id
      });
    case RESET_PIN:
      return merge({}, state, {currentPin: {}});
    case REMOVE_PIN:
      const pinID = action.pin.id
      const dupState = merge({}, state);
      delete dupState[pinID]
      return dupState
    default:
      return state;
  }
};

export default pinsReducer;
