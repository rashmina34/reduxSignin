//  import { createStore, applyMiddleware} from 'redux';
//  import thunk from 'redux-thunk';
//  import logger from 'redux-logger';
//  import reducer from './SignIn/reducers';


//  const store = createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//  export default store;


import { createStore } from "redux";

// Logger with default options

// import logger from "redux-logger";

import reducer from "./SignIn/reducers";

export default function configureStore(initialState) {

  const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;

}