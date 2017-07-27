import merge from 'lodash/merge';
import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER, RESET_USER } from '../actions/user_actions';


const defaultState = () => Object.freeze({
  entities: {},
  chosenUser: {},
  errors: [],
})

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, {entities: action.users});
    case RECEIVE_SINGLE_USER:
      return merge({}, action.user);
    case RESET_USER:
      return merge({}, state, {chosenUser:{}})
    default:
      return state;
  }
};

export default usersReducer;
