// import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css'
// import { Provider } from 'react-redux';
// import SigninForm from './SignIn/index';
// import general from './components/general';
// import admin from './components/admin';
// import user from './components/user';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import createHistory from 'history/createBrowserHistory';
// import configureStore from './store';

// const initialState = {};
// const history = createHistory();
// const store = configureStore(initialState, history);

// class App extends Component {
//   render() {
//     return (
//       <Provider store = {store} >
//        <div className="App">
//        <Router>  
//       <div>
//            <Route path="/general" component = {general} />
//            <Route path="/admin" component = {admin} />
//            <Route path="/user" component = {user} />
//       </div>

//       </Router>
//         <SigninForm/>
//       </div>
//        </Provider>
       
//     );
//   }
// }
// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./SignIn/signinForm', App)
// }


// export default App;



import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import SigninForm from './LogIn/index';
import superadmin from './components/superadmin';
import admin from './components/admin';
import user from './components/user';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import {BrowserHistory } from 'react-history';
// import store from './store';
import configureStore from "./store";

const  reduxStore = configureStore(window.REDUX_INITIAL_DATA);
class App extends Component {
  state ={
    ownDashboard: true
  }
  componentWillMount() {
    const token = window.location.href.split('/')[0] === 'superadmin' ? localStorage.getItem('token') :
      sessionStorage.getItem('token') ? sessionStorage.getItem('token') : localStorage.getItem('token');
    if (token && token === localStorage.getItem('token')) {
      this.setState({ownDashboard: false});
    }

    try {
      const decoded = jwtDecode(token);
      console.log('Decoded value', decoded);
      if (
        typeof decoded === 'object' &&
        decoded.hasOwnProperty('user') &&
        decoded.hasOwnProperty('exp') &&
        decoded.exp > Date.now() / 1000
      )//console.log('error', decoded)
       {
        if (decoded.user._id) this.props.loginByTokenRequest(decoded.user._id);
      }
    } catch (error) {
    }
  }

  componentDidMount() {
    const { user } = this.props; 
    const isValidUser = user && user.size >= 0;
    if (
      isValidUser &&
      user.user_role !== undefined 
      //user.user_role.indexOf('vendor') !== -1
    ) {
      if( user.userInfo.user_role[0]==="superadmin"){
        window.location.assign("/superadmin")
      } 
       else if( user.userInfo.user_role[1]==="admin"){ debugger
         window.location.assign("/admin")
       }
       else
         window.location.assign("/user")
   }//this.props.loadInitialData();
    }
  

  render() {
    return (
      <Provider store = {reduxStore} >
       <div className="App">
       <Router>  
      <div>
        {(!this.state.ownDashboard)?<Route path="/superadmin" component = {superadmin} />: <Router path= "/" component = {SigninForm}/>}
            {/* <Router path= "/" component = {SigninForm}/> */}
           {/* <Route path="/superadmin" component = {superadmin} /> */}
           <Route path="/admin" component = {admin} />
           <Route path="/user" component = {user} />
      </div>

      </Router>
        <SigninForm/>
      </div>
      </Provider>
    );
  }
}

export default App;