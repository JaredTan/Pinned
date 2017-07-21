import {values} from 'lodash';

export const selectAllPins = pins => {
  return (values(pins.entities));
};
