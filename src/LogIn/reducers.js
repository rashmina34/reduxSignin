import { LOGGED_IN, LOGIN_REQUEST, LOGIN_FAILED, LOGIN_BY_TOKEN_REQUEST, LOGIN_BY_TOKEN_SUCCESS, LOGIN_BY_TOKEN_FAILURE } from './constant'
// todo: handle user confirmation email resend flow in here

const initialState = ({
  requesting: false,
  success: true,
  response: null,
  errors: null,
  token : null,
  isLoggedIn: false,
  userInfo: {},
  email: '',
  shouldRedirect: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_BY_TOKEN_REQUEST: 
    case LOGIN_REQUEST:
  
      let tokenRequest = {
        requesting: true,
        success: false,
        errors: null,
        response: null,
        email: '',
      };
      return tokenRequest
    case LOGIN_BY_TOKEN_FAILURE:
    case LOGIN_FAILED:
      let tokenFailed = {
        ...state,
        requesting: false,
        success: false, 
        errors: action.errors.message,
        response: null,
      };
      return tokenFailed

    case LOGIN_BY_TOKEN_SUCCESS:
      let TokenNewState ={
        ...state,
        requesting: false,
        success: true,
        isLoggedIn: true,
        error: null,
        token: action.response,
        userInfo: action.response.userInfo,
      };
      return TokenNewState;

    case LOGGED_IN:
     let newState={ 
        ...state,
        requesting: false,
        token: action.user,
        success: true,
        isLoggedIn: true,
        error: null,
        email:'email',
        shouldRedirect: true,
        userInfo: action.user,
      };
    return newState;

    default:
      return state;
  }
}

export default loginReducer;