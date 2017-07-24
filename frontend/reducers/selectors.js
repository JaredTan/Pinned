import {values} from 'lodash';

export const selectAllPins = pins => {
  return (values(pins.entities));
};

export const selectSingleUser = ({ users }, id) => {
  console.log(users,'users');
  return users[id] || {};
};
