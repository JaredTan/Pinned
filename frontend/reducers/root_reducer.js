import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import pinsReducer from './pin_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  pins: pinsReducer
});

export default rootReducer;
