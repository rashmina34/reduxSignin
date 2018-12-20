// import React from 'react';
// import SigninForm from './signinForm';
// import {loginRequest, loginSuccess } from './action';
// import  submitLogin  from './apiConnection';
// import { connect } from 'react-redux';
// //import {browserHistory} from 'react-router-dom';
// //import Redirectlogin from './sagas';
// //import saga from './sagas';


// class Signin extends React.Component{
//   constructor(props){
//     super(props);
//     const storedMessage = localStorage.getItem('successmessage');
//     let successmessage ='';

//     if(storedMessage){
//       successmessage = storedMessage;
//       localStorage.removeItem('successmessage');
//     }

//     this.state ={
//       errors: {},
//       successmessage,
//       data: {
//         email: '',
//         password: ''
//       }
//     };
//   }

//   componentDidMount() {
//     if( this.props.loggedIn){
//       console.log("redirect to dashboard");
//     }
//   }

//     login = (Data)=> { 
//       console.log('.....data is feetching ')
//         return submitLogin(Data).then(token => {
//           // this.props.history.push("/dshboard/superadmin");
//           //browserHistory.push('/dshboard/superadmin');
//             // this.props.loginSuccess(token);
            
//         }).catch(error => {
//             throw (error);
//         });
       
// }

  

//   onSubmit = (event)=> { 
//     event.preventDefault();
//     const {email, password} = this.state.data;
//     //this.props.submitform(data);
//     const errors = this.validate();
//     this.setState({ errors });
//     if(Object.keys(errors).length === 0){
//      let data = this.login(this.state.data);
//      if (data && data.token){
//        this.props.loginSuccess(data.token)
//      }
//     }
    
//   }
//   validate = () => {
//         const { data } = this.state;
//         const errors = {};
//         if (!data.email) errors.email = "email can't be empty"  ;
//         if (data.email) errors.email = 
//         this.ValidateEmail();
//         if (!data.password) errors.password = "Password error";
//         //console.log(JSON.stringify(errors));
//         console.log('-----------',errors);
//         return errors;
//       };

//    ValidateEmail = () => {
//      const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//      if (rgx.test(this.state.data.email))
//         {
//           return (true)
//         }
//         alert("You have entered an invalid email address!")
//             return (false)
//         }
      

//   onChange = (event)=> {
//       const field = event.target.name;
//       const data = this.state.data;
//       data[field] = event.target.value;
  
//       this.setState({
//         data
//       });
//     }
//       render() {
//         return (
//           <SigninForm
//             onSubmit={this.onSubmit}
//             onChange={this.onChange}
//             errors={this.state.errors}
//             successMessage={this.state.successMessage}
//             data={this.state.data}
//           />
//         );
//       }
//   }

//   const mapStateToProps = (state) => {
//     console.log(state); 
//     return {
//       loggedIn : state.isLoggedIn

//     }
//   }

//   const mapDispatchToProps = (dispatch) => {
//     debugger;
//     return {
    
//       loginSuccess: (data) => dispatch(loginSuccess(data)),
//       loginRequest: (email,password) => dispatch(loginRequest(email,password)),
//       //submitform: (data) => dispatch(loginSuccess(data)),
//       }
//     }

//     //const withsaga = Redirectlogin({ key : 'homesaga', saga}) 

// export default connect( mapStateToProps ,mapDispatchToProps)(Signin);





import React from 'react';
import SigninForm from './signinForm';
import {loginRequest, loginSuccess } from './action';
import  submitLogin  from './apiConnection';
import { connect } from 'react-redux';

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
      if(nextProps.userInfo && nextProps.isLoggedIn){ 
          console.log("redirect to dashboard");
         if( nextProps.userInfo.user_role[0]==="superadmin"){
            window.location.assign("/superadmin")
         } 
          else if( nextProps.userInfo.user_role[1]==="admin"){
            window.location.assign("/admin")
          }
          else
            window.location.assign("/user")
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
      //submitform: (data) => dispatch(loginSuccess(data)),


      // loadUserToken: () => {
      //   const token = localStorage.getItem('token');
      //   if(!token || token === ''){
      //     return; // if token doesn't match or token is not present
      //   }console.log("console is in token");
      //   dispatch(loginByTokenRequest(token))
      //   .then((res) => {
      //     if(!res.errors){
      //       localStorage.setItem('token',res.response.userInfo.token);
      //       dispatch(loginByTokensuccess(res.response));
      //     } else {
      //       localStorage.removeItem('token');
      //       dispatch(loginByTokenFailure(res.error));
      //     }
      //   });
      // },
      // resetMe: () => {
      //   localStorage.removeItem('token');
      //   //dispatch(resetToken());
      // }
       }
    }
    //const withsaga = Redirectlogin({ key : 'homesaga', saga})
    export default connect( mapStateToProps ,mapDispatchToProps)(Signin);



 