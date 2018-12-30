import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { loginSuccess } from '../LogIn/action';
import { withRouter } from 'react-router-dom' 

class authenticate extends Component{
    state ={
          ownDashboard: false
        }

componentWillMount() {
    const token = window.location.href.split('/')[0] === 'superuser' ? localStorage.getItem('token') :
    sessionStorage.getItem('token') ? sessionStorage.getItem('token') : localStorage.getItem('token');
    if (token && token === localStorage.getItem('token')) {
        this.setState({ownDashboard: true});
      }
      
    try {
        const decoded = jwtDecode(token);
        console.log('Decoded value', decoded);
        this.props.loginSuccess(decoded);
                
        if (
            typeof decoded === 'object' &&
            decoded.hasOwnProperty('user') &&
            decoded.hasOwnProperty('exp') &&
            decoded.exp > Date.now() / 1000
            )
         {
          if (decoded.user._id) 
          this.props.loginByTokenRequest(decoded.user._id); console.log("echo", decoded.user._id)
        }
        } catch (error) {
      }
      
    }
    
      
componentDidMount() {
const { user } = this.props; console.log("user", user)
const isValidUser = user && user.size > 0; console.log("isvaliduser", isValidUser)
if( isValidUser && user.userInfo.user_role !== undefined  ) { 
    if( user.userInfo.user_role[0]==="superuser"){
    this.props.history.push("/superuser")
        } 
    else if( user.userInfo.user_role[0]==="admin"){ 
        this.props.history.push("/admin")
        }
    else
        this.props.history.push("/user")
        
        }
     }

render(){
    
const {ownDashboard}=this.state;
// const { rasmina } = this.props; console.log(rasmina,'======rasmina');
 return (
    <div>
        {ownDashboard?this.props.children:null}
    </div>  
        )
    }

}//-----------------------------end of class

const mapDispatchToProps = (dispatch) => {
    return {
      loginSuccess: (data) => dispatch(loginSuccess(data)),
    }
}

const mapStateToProps = (state) => {
        return {
           user:state.userInfo,
        }
    }
export default withRouter(connect( mapStateToProps ,mapDispatchToProps) (authenticate));