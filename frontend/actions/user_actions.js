import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";


export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
};

export const receiveSingleUser = (user) => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  }
};

export const requestAllUsers = () => (dispatch) => {
  return APIUtil.fetchAllUsers().then(
    users => dispatch(receiveAllUsers(users))
  );
};

export const requestSingleUser = id => (dispatch) => {
  return APIUtil.fetchSingleUser(id).then(
    user => dispatch(receiveSingleUser(user))
  );
};
