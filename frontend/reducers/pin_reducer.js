import merge from 'lodash/merge';
import {RECEIVE_ALL_PINS, RECEIVE_SINGLE_PIN} from '../actions/pin_actions';


const PinsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return action.pins;
    case RECEIVE_SINGLE_PIN:
      return merge({}, state, {[action.pin.id]: action.pin});
    default:
      return state;
  }
};

export default PinsReducer;
