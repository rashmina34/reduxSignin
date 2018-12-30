import React from 'react';
import SigninForm from './signinForm';
import {loginRequest, loginSuccess } from './action';
import  {submitLogin}  from './apiConnection';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom' 

class Signin extends React.Component{
  constructor(props){
    super(props);
    const storedMessage = localStorage.getItem('suc cessmessage');
    let successmessage ='';

    if(storedMessage){
      successmessage = storedMessage;
      localStorage.removeItem('successmessage');
    }

    this.state ={
      errors: {},
      successmessage,
      isLoggedIn: false,
      ownDashboard: true,
      data: {
        email: '',
        password: ''
      },
      obj:{}
    };
  }

  
  componentWillReceiveProps(nextProps){
      if(this.props.userInfo!==nextProps.userInfo && nextProps.userInfo && nextProps.isLoggedIn){ debugger
          console.log("redirect to dashboard");
         if( nextProps.userInfo.user_role[0]==="superuser"){
            this.props.history.push("/superuser");
            
         } 
          else if( nextProps.userInfo.user_role[0]==="enduser"){
            // window.location.assign("/admin")
            this.props.history.push("/enduser")
          }
          else
            window.location.assign("/general")
       }console.log('redirection is successful');
  }



    login = (Data)=> { 

      console.log('.....data is feetching ')
        return submitLogin(Data).then(token => {
            this.props.loginSuccess(token); 
        }).catch(error => {
            throw (error);
        });
}

  onSubmit = (event)=> {
    event.preventDefault();
    const {email, password} = this.state.data;
    //this.props.submitform(data);
    const errors = this.validate();
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
     this.login(this.state.data);
    }
  }

  validate = () => {
        const { data } = this.state;
        const errors = {};
        if (!data.email) errors.email = "email can't be empty"  ;
        this.ValidateEmail();
        if (!data.password) errors.password = "Password error";
        // if(data.password) errors.password = "your password is incorrect"
        //console.log(JSON.stringify(errors));s
        console.log('-----------',errors);
        return errors;
      };

   ValidateEmail = () => {
     const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (rgx.test(this.state.data.email))
        {
          return (true)
        }
        alert("You have entered an invalid email address!")
            return (false)
        }

  onChange = (event)=> {
      const field = event.target.name;
      const data = this.state.data;
      data[field] = event.target.value;
      this.setState({
        data
      });
    }

      render() {
        return (
          <div>
          <SigninForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            errors={this.state.errors}
            successMessage={this.state.successMessage}
            data={this.state.data}
          />
          {/* {
            this.props.isLoggedIn &&
            <Link to="/superadmin">Access dashboard</Link>
          } */}
          </div>
          
        ); 
      }
  
  } //--------------------------------- end of class

  const mapStateToProps = (state) => {
    return {
      userInfo : state.userInfo,
      isLoggedIn:state.isLoggedIn
    }
  }
  const mapDispatchToProps = (dispatch) => {

    return {
      loginSuccess: (data) => dispatch(loginSuccess(data)),
      loginRequest: (email,password) => dispatch(loginRequest(email,password)),
      
       }
    }
    export default withRouter (connect( mapStateToProps, mapDispatchToProps)(Signin));



 