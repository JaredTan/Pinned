import {values} from 'lodash';

export const selectAllPins = pins => {
  return (values(pins.entities));
};

export const createPinArray = pins => {
  return (values(pins));
};


export const selectAllBoards = boards => {
  return (values(boards.entities));
};

export const selectSingleUser = ({ users }, id) => {
  return users[id] || {};
};

export const selectBoards = (state, array) => {

}
