import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RESET_USER = "RESET_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RESET_USER_ERRORS = "RESET_USER_ERRORS";

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

export const updateUser = (user, id) => (dispatch) => {

  return APIUtil.updateUser(user, id).then(user => {
    dispatch(receiveSingleUser(user));
    dispatch(resetUserErrors());
    return user;
  }).fail(err => dispatch(receiveUserErrors(err.responseJSON)))
};


export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  }
}

export const resetUser = () => {
  return {
    type: RESET_USER
  }
}


export const resetUserErrors= () => {
  return {
    type: RESET_USER_ERRORS
  }
}
