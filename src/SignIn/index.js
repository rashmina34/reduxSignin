// import React from 'react'
// //import { Link } from 'react-router-dom';
// //import { connect } from 'react-redux'
// import { Button } from 'semantic-ui-react'
// import InputField from './inputfield';
// import PasswordInputField from './passwordInputField';
// //import { userActions } from './action';
// import { loginRequest } from './action';

// class SigninForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       email : '',
//       password : '',
//       submitted : false,
//       data :'',
//       errors: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

// //   handleChange(e) {
// //     const { name, value } = e.target;
// //     this.setState({ [name]: value });
// // }

// handleChange = e => {
//   e.persist();
//   this.setState(state => ({
//     data: {
//       ...state.data,
//       [e.target.name]: e.target.value,
//     },
//   }));
// };

//   // handleSubmit(e) {
//   //   e.preventDefault();
//   //   this.setState({ submitted: true });
//   //   const { email, password } = this.state;
//   //   const { dispatch } = this.props;
//   //     if (email && password) {
//   //         dispatch(userActions.login(email, password));
//   // }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { loginRequest, dispatch } = this.props;
//     const { email, password } = this.state;
//     const errors = this.validate();
//     this.setState({ submitted: true });
//     // if (Object.keys(errors).length === 0) {
//     //    loginRequest(data);
//     // }
//     if(email && password){
//       dispatch(loginRequest(email,password));
//     }
//   };

//   validate = () => {
//     const { data } = this.state;
//     const errors = {};
//     if (!data.email) errors.email = "email doesn't exist";
//     if(data.email==='') errors.email ='email cannot be empty'
//     if (!data.password) errors.password = "Password error";
//     return errors;
//   };


//   render(){
//   //const { loggingIn } = this.props;
//   const { data, errors } = this.state;

//   return(
//       <div>
//         Email
//         <InputField 
//          placeholder='Email'
//          name = 'email'
//          type = 'email'
//          value={data.email || ''}
//          onChange = {this.handleChange}>
//         </InputField>
        
//         <PasswordInputField
//          placeholder='password'
//          name = 'password'
//          type = 'password'
//          password = {data.password || ''}
//          error={errors.password ? 'password_error' : null}
//          onChange = {this.handleChange}>
//         </PasswordInputField  >
//         <br/>
//         <br/>
//         <Button type = 'submit' onClick = {this.handleSubmit}>Login</Button>
//       </div>
//     )
//   }
// }
    
// //     export default SigninForm;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { push } from 'react-router-redux';
// import { Button } from 'semantic-ui-react';
// import Link from 'react-router-dom';
// import SigninForm from './signin';
// import { loginRequest } from './action';
// import {
//   makeSelectError, makeSelectResponse, makeSelectEmail, makeSelectSuccess, makeSelectUserId, makeSelectRequesting
// } from './selectors';

// const mapDispatchToProps = (dispatch) => ({
//   loginRequest: (values) => dispatch(loginRequest(values)),
//   redirectToRegister: () => dispatch(push('/Register')),
// });

// const mapStateToProps = createStructuredSelector({
//   requesting: makeSelectRequesting(),
//   response: makeSelectResponse(),
//   error: makeSelectError(),
//   success: makeSelectSuccess(),
//   unverifiedImpUserId: makeSelectUserId(),
//   email: makeSelectEmail(),
// });

// class Login extends React.Component {
//   static propTypes = {
//     loginRequest: PropTypes.func.isRequired,
//     showDialog: PropTypes.func.isRequired,
//     redirectToSignup: PropTypes.func.isRequired,
//     clearMessages: PropTypes.func.isRequired,
//     unverifiedImpUserId: PropTypes.string.isRequired,
//     requestingResendEmail: PropTypes.bool.isRequired,
//   };
//   state = {
//     data: {
//       username: this.props.email || ''
//     },
//     show_password: false,
//     errors: {},
//     err:'',
//   };
//   handleChange = e => {
//     e.persist();
//     this.setState(state => ({
//       data: {
//         ...state.data,
//         [e.target.name]: e.target.value,
//       },
//     }));
//   };
//   validate = () => {
//     const { data } = this.state;
//     const errors = {};
//     if (!data.email) errors.email = "email can't be empty";
//     if (!data.password) errors.password = "Password error";
//     return errors;
//   };


// handleSubmit = (e) => {
//   e.preventDefault();
//   const { loginRequest } = this.props;
//   const { data } = this.state;
//   const errors = this.validate();
//   this.setState({ errors });
//   if (Object.keys(errors).length === 0) {
//    loginRequest(data);
//   }
// };

// showSignUpForm = () => {
//   this.props.redirectToSignup();
// };

// render() {
//   const { errors, data } = this.state;
//   const { requesting } = this.props;
//   return (
//         <h2>Login</h2>        

//          <SigninForm
//           data={data} errors={errors} requesting={requesting} onSubmit={this.onSubmit}
//            onChange={this.onChange} onChange={this.onChange} >
//            </SigninForm>
        
//         <Link to="/register/customer"> Don't have account? Create Now</Link>
//         <Link to="/">Go to Home Page</Link>

//   )}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);






import React, { PropTypes} from 'react';
import SigninForm from './signinForm';
//import { ReactComponent } from '*.svg';
import {loginRequest} from './action';

class Signin extends React.Component{
  constructor(props){
    super(props);
    const storedMessage = localStorage.getItem('successmessage');
    let successmessage ='';

    if(storedMessage){
      successmessage = storedMessage;
      localStorage.removeItem('successmessage');
    }

    this.state ={
      errors: {},
      successmessage,
      data: {
        email: '',
        password: ''
      }
    };
    //this.onSubmit = this.onSubmit.bind(this);//onSubmit
    //this.onChange = this.onChange.bind(this);//onchange
  }
  

  onSubmit = (event)=> {
    event.preventDefault();
    const {email, password} = this.state.data;
    const errors = this.validate();
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
      loginRequest(email, password)
    }
  }
  validate = () => {
        const { data } = this.state;
        const errors = {};
        if (!data.email) errors.email = "email can't be empty"  ;
        if (data.email) errors.email = 
        this.ValidateEmail();
        if (!data.password) errors.password = "Password error";
        //console.log(JSON.stringify(errors));
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
          <SigninForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            errors={this.state.errors}
            successMessage={this.state.successMessage}
            data={this.state.data}
          />
        );
      }
  }

  


// Signin.contextTypes = {
//   router: PropTypes.object.isRequired
//}

 export default Signin;
  

