import {RECEIVE_USER_ERRORS, RESET_USER_ERRORS} from '../actions/user_actions';
import {RECEIVE_PIN_ERRORS, RESET_PIN_ERRORS} from '../actions/pin_actions';
import merge from 'lodash/merge';

const defaultState = () => ({
  user: [],
  pins: []
})



const errorsReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return merge({}, state, {user: [...action.errors]});
    case RECEIVE_PIN_ERRORS:
      return merge({}, state, {pins: [...action.errors]});
    case RESET_USER_ERRORS:
      return merge({}, state, {user: []});
    case RESET_PIN_ERRORS:
      return merge({}, state, {pins: []});
    default:
      return state;
  }
};

export default errorsReducer;
