// // import { fromJS } from "immutable";
// // import * as types from "./constants";
// // // todo: change other action types to local actions to avoid future confusion
// // import { REGISTER_SUCCESS, CUSTOMER_REGISTER_SUCCESS } from '../Register/constants'; // for getting success message of sign up

// import { LOGGED_IN, LOGIN_REQUEST, LOGIN_FAILED } from './constant'
// // todo: handle user confirmation email resend flow in here
// const initialState = ({
//   requesting: false,
//   success: true,
//   response: null,
//   errors: null,
//   token : null,
//   isLoggedIn: false,
//   userInfo: {},
//   email: '',
// });

// function loginReducer(state = initialState, action) { 
//   switch (action.type) {

//     //case LOGIN_BY_TOKEN_REQUEST:
//     case LOGIN_REQUEST:
//     debugger
//       return state.merge({
        

//         requesting: true,
//         success: false,
//         errors: null,
//         response: null,
//         email: '',
//       });
    
//     case LOGIN_FAILED:
//       return state.merge({
//         requesting: false,
//         success: false,
//         errors: action.errors.message,
//         response: null,
        
//       });
    
//     // case LOGIN_BY_TOKEN_SUCCESS:
//     //   return state.merge({
//     //     requesting: false,
//     //     success: true,
//     //     isLoggedIn: true,
//     //     error: null,
//     //   });

//     case LOGGED_IN: 
//       return state.merge({
//         ...state,
//         requesting: false,
//         token: action.user,
//         success: true,
//         isLoggedIn: true,
//         error: null,
//         email:'email',
      
//       });
  
//     default:
//       return state;
//   }
// }

// export default loginReducer;



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
    debugger
      return state.merge({
        requesting: true,
        success: false,
        errors: null,
        response: null,
        email: '',
      });
    case LOGIN_BY_TOKEN_FAILURE:
    case LOGIN_FAILED:
      return state.merge({
        requesting: false,
        success: false, 
        errors: action.errors.message,
        response: null,
      });

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
        userInfo: action.user.userInfo,
      };
    return newState;

    default:
      return state;
  }
}

export default loginReducer;