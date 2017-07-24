import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import pinsReducer from './pins_reducer';
import usersReducer from './users_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  pins: pinsReducer,
  users: usersReducer
});

export default rootReducer;
