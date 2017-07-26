import merge from 'lodash/merge';
import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions';


const defaultState = () => Object.freeze({
  entities: {},
  chosenUser: {},
  errors: [],
})

const usersReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, {entities: action.users});
    case RECEIVE_SINGLE_USER:
      const user = action.user;
      return merge({}, state, {chosenUser: action.user});
    default:
      return state;
  }
};

export default usersReducer;
