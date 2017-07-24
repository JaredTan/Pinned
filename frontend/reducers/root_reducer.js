import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import pinsReducer from './pins_reducer';
import usersReducer from './users_reducer';
import boardsReducer from './boards_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  pins: pinsReducer,
  users: usersReducer,
  boards: boardsReducer
});

export default rootReducer;
