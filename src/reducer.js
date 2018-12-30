import { combineReducers } from 'redux-immutable';
import loginReducer from './LogIn/reducers';
import roleReducer from './Role/reducer';

export default function createReducer(asyncReducers) {
    return combineReducers({
      login: loginReducer,
      role: roleReducer,
      ...asyncReducers
    });
  }