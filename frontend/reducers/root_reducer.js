import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import pinsReducer from './pins_reducer';
import userReducer from './user_reducer';
import boardReducer from './board_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  pins: pinsReducer,
  user: userReducer,
  board: boardReducer,
  errors: errorsReducer
});

export default rootReducer;
