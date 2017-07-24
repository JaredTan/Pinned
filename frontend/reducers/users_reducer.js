import merge from 'lodash/merge';
import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions';


const defaultState = () => ({
  entities: {},
  chosenUser: {},
  errors: []
})

const usersReducer = (state = defaultState(), action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, {entities: action.users});
    case RECEIVE_SINGLE_USER:
    const user = action.user;

    return merge({}, state, {
      entities: { [user.id]: user },
      chosenUser: user
    });
    default:
      return state;
  }
};

export default usersReducer;
