import * as APIUtil from '../util/following_api_util';

export const createFollow = follow => dispatch => {
  return APIUtil.createFollow(follow).then(
    user => dispatch(receiveSingleUser(user))
  );
}

export const deleteFollow = follow => dispatch => {
  return APIUtil.removeFollow(follow).then(
    user => dispatch(receiveSingleUser(user))
  );
}
