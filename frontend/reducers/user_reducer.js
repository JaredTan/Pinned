import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER, RESET_USER } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return merge({}, action.user);
    case RESET_USER:
      return merge({})
    default:
      return state;
  }
};

export default userReducer;
