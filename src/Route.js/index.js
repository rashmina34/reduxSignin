import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import jwtDecoded from 'jwt-decode';
import General from './../components/general';
import User from './../components/user';
import Admin from './../components/admin';
import SignIn from './../SignIn/signinForm';    

class Routes extends Component {
    componentWillMount(){
        const token = localStorage.getItem('token');
        const decoded = jwtDecoded(token);
        // if(decoded.state.user_role[0]){
        //     <Link to = '/dashboard/superadmin'>login</Link>
        // }

    }
    render(){
        return(
            <div className = 'Routes'>
                <Router>  
                <div>
                    <Route exact path="/dashboard/general" component = {General} />
                    <Route exact path="/dshboard/superadmin" component = {Admin} />
                    <Route exact path="/dashboard/user" component = {User} />
                </div>

                </Router>
            </div>
        
        );
    }
}

export default Routes;
