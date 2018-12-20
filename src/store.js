// import { applyMiddleware, compose, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga';
// import { fromJS } from 'immutable';
// import { routerMiddleware } from 'react-router-redux';

// import loginReducer from './SignIn/reducers';
// import Redirectlogin from './SignIn/sagas';


// const sagaMiddleware = createSagaMiddleware();

// export default function configureStore(initialState = {}, history) {
//   const middlewares = [sagaMiddleware, routerMiddleware(history)]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer]
//   const composedEnhancers = compose(...enhancers)

//   const store = createStore(loginReducer(), fromJS(initialState), composedEnhancers)

//   sagaMiddleware.run(...Redirectlogin);
//   store.runSaga = sagaMiddleware.run;
//   store.asyncReducers = {};
//   store.asyncSagas = {};

//   if (module.hot) {
//     module.hot.accept('./SignIn/reducers', () => {
//       import('./SignIn/reducers')
//       .then(reducerModule => {
//       const createReducers = reducerModule.default;
//       const nextReducers = createReducers(store.asyncReducers);

//       store.replaceReducer(nextReducers);
//       });
//     });
//   }

//   return store
// }

// import { applyMiddleware, compose, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'

// import monitorReducersEnhancer from './Middlewares/monitorReducer';
// import loggerMiddleware from './Middlewares/logger';
// import rootReducer from './SignIn/reducers';

// export default function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = compose(...enhancers)

//   const store = createStore(rootReducer, preloadedState, composedEnhancers)

//   if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('./SignIn/reducers', () => store.replaceReducer(rootReducer))
//   }

//   return store
// }


import { createStore } from "redux";

// Logger with default options

// import logger from "redux-logger";

import reducer from "./LogIn/reducers";

export default function configureStore(initialState) {

  const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // let state = initialState;
    // function getState(){
    //   return state;
    // }
    // function dispatch(action) {
    //   state =reducer(state, action)
    //   return action;
    // }

  return store;
}
