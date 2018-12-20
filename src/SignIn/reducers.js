import { fromJS } from "immutable";
import { LOGGED_IN, LOGIN_REQUEST, LOGIN_FAILED } from './constant'

export const initialState = fromJS({
  requesting: false,
  success: true,
  response: null,
  errors: null,
  token : null,
  isLoggedIn: false,
  userInfo: {},
  email: '',
});

function loginReducer(state = initialState, action) { 
  switch (action.type) {

  //case LOGIN_BY_TOKEN_REQUEST:
    case LOGIN_REQUEST:
    debugger
      return state.merge({
        requesting: true,
        success: false,
        errors: null,
        response: null,
        email: '',
      });
    
    case LOGIN_FAILED:
      return state.merge({
        requesting: false,
        success: false,
        errors: action.errors.message,
        response: null,
        
      });
    
    // case LOGIN_BY_TOKEN_SUCCESS:
    //   return state.merge({
    //     requesting: false,
    //     success: true,
    //     isLoggedIn: true,
    //     error: null,
    //   });

    case LOGGED_IN:
    console.log('it is catching in LOGGED_IN',action.user);
      return state.merge({
        // ...state,
        requesting: false,
        token: action.user.token,
        userInfo: action.user.userInfo,
        success: true,
        isLoggedIn: true,
        error: null,
        email:'email',
      
      });
  
    default:
      return state;
  }
}

export default loginReducer;


// import { LOGGED_IN, LOGIN_REQUEST, LOGIN_FAILED } from './constant'
// import { fromJS } from 'immutable';

// // todo: handle user confirmation email resend flow in here

// export const initialState =fromJS ({

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

//       return state.merge({

//         ...state,

//         requesting: true,

//         success: false,

//         errors: null,

//         response: null,

//         email: '',

//       });



//     case LOGIN_FAILED:

//       return state.merge({

//         ...state,

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

//      let newState={

//         ...state,

//         requesting: false,

//         token: action.user,

//         success: true,

//         isLoggedIn: true,

//         error: null,

//         email:'email',

//         userInfo: action.user.userInfo,

//       };

//     return newState;



//     default:

//       return state;

//   }

// }



// export default loginReducer;