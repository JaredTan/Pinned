import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RESET_ERRORS, LOGOUT_USER } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const noErrors = Object.freeze({
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {errors});
    case RESET_ERRORS:
      return merge({}, {currentUser}, noErrors);
    case LOGOUT_USER:
      return merge({}, nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
