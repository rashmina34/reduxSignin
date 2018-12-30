import React, { Component } from 'react';
import AdminAuthentication from './components/adminAuthentication'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import SigninForm from './LogIn/index';
import roleForm from './Role/index';
import superuser from './components/superadmin';
import enduser from './components/admin';
import general from './components/user';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import configureStore from "./store";

const  reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <Provider store = {reduxStore} >
       <div className="App">
       <Router> 
      <div>
      <AdminAuthentication>
        <Route path="/superuser" component = {superuser} />
        {/* <Route exact path="/superadmin/role" component = {roleForm} /> */}

      </AdminAuthentication>
      <Switch>
      <Route exact path="/role" component = {roleForm} />
      <Route exact path="/role" component = {roleForm} />      
        <Route exact path = "/" component = {SigninForm}/>
        <Route exact path="/enduser" component = {enduser} />
        <Route exact path="/general" component = {general} />

      </Switch> 
      </div>

      </Router>
      </div>
      </Provider>
    );
  }
}

export default App;