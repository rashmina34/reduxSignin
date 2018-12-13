// import { fromJS } from "immutable";
// import * as types from "./constants";
// // todo: change other action types to local actions to avoid future confusion
// import { REGISTER_SUCCESS, CUSTOMER_REGISTER_SUCCESS } from '../Register/constants'; // for getting success message of sign up

import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILED, LOGIN_BY_TOKEN_SUCCESS,LOGIN_BY_TOKEN_REQUEST, LOGIN_BY_TOKEN_FAILURE} from './constant'
// todo: handle user confirmation email resend flow in here
const initialState = ({
  requesting: false,
  success: true,
  response: null,
  errors: null,
  isLoggedIn: false,
  userInfo: {},
  email: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_BY_TOKEN_REQUEST:
    case LOGIN_REQUEST:
  
      return state.merge({
        requesting: true,
        success: false,
        errors: null,
        response: null,
        email: '',
        password: '',
      });
    
    case LOGIN_FAILED:
      return state.merge({
        requesting: false,
        success: false,
        errors: action.errors.message,
        response: null,
        
      });
    
    case LOGIN_BY_TOKEN_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        isLoggedIn: true,
        error: null,
      });

    case LOGIN_SUCCESS: 
      localStorage.setItem("token", action.user.data)
      return state.merge({
        isLoggedIn: true,
        error: null,
        userId: '',
      });
  
    default:
      return state;
  }
}

export default loginReducer;


