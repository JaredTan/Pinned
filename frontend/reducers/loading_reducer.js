import {
  RECEIVE_ALL_PIN,
  RECEIVE_SINGLE_PIN,
  RECEIVE_NEW_PIN,
  CREATE_PIN,
  START_LOADING_ALL_PINS,
  START_LOADING_SINGLE_PIN } from '../actions/pin_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_PINS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_NEW_PIN:
    case RECEIVE_SINGLE_PIN:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_ALL_PINS:
      return Object.assign({}, state, { indexLoading: true });
    case CREATE_PIN:
    case START_LOADING_SINGLE_PIN:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};
