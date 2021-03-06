import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { Provider } from 'react-redux';
// import store from './store';
// import LoginForm from './signin/signinForm'
// ReactDOM.render(
//     <Provider store= {store} >
//     <LoginForm/>
//     </Provider>,
//     document.getElementById('root')
 // );


// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import App from './App'
// import configureStore from './store'

// const store = configureStore()

// const renderApp = () =>
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   )

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./App', renderApp)
// }

// renderApp()

