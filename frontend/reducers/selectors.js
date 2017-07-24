import {values} from 'lodash';

export const selectAllPins = pins => {
  return (values(pins.entities));
};

export const selectSingleUser = ({ users }, id) => {
  return users[id] || {};
};
