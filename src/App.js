import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import SigninForm from './SignIn/index';
import general from './components/general';
import admin from './components/admin';
import user from './components/user';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import {BrowserHistory } from 'react-history';
// import store from './store';
import configureStore from "./store";

const  reduxStore = configureStore(window.REDUX_INITIAL_DATA);
class App extends Component {
  render() {
    return (
      <Provider store = {reduxStore} >
       <div className="App">
       <Router>  
      <div>
            <Router path= "/" component = {general}/>
           <Route path="/general" component = {general} />
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
