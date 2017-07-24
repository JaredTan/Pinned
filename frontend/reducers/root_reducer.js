import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import pinReducer from './pin_reducer';
import userReducer from './user_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  pins: pinReducer,
  user: userReducer
});

export default rootReducer;
