import {values} from 'lodash';

export const selectAllPins = pins => {
  return (values(pins.entities));
};

export const selectAllUsers = users => {
  return (values(users.entities));
}

export const selectFollowingUsers = (users, followingsArr) => {
  return users.filter( user => {
    return values(followingsArr).includes(user.id);
  })
}

export const createPinArray = pins => {
  return (values(pins));
};

export const selectAllBoards = boards => {
  return (values(boards.entities));
};

export const selectSingleUser = ({ users }, id) => {
  return users[id] || {};
};
