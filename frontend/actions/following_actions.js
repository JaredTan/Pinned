import * as APIUtil from '../util/following_api_util';

import { receiveSingleUser } from './user_actions';

export const createFollowing = following => dispatch => {
  return APIUtil.createFollowing(following).then(
    user => dispatch(receiveSingleUser(user))
  );
}

export const removeFollowing = following => dispatch => {
  return APIUtil.removeFollowing(following).then(
    user => dispatch(receiveSingleUser(user))
  );
}
