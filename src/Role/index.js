import React from 'react';
import RoleForm from './roleForm'
// import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchpost, RolePostSuccess } from './action';
import { createPost } from './../LogIn/apiConnection';
import { withRouter } from 'react-router-dom' 


class Role extends React.Component{
  constructor(props){ 
    super(props);
    const storedMessage = localStorage.getItem('suc cessmessage');
    let successmessage ='';

    if(storedMessage){
      successmessage = storedMessage;
      localStorage.removeItem('successmessage');
    }

    this.state ={
      error: {},
      successmessage,
      isRolePosted: false,
      isRoleDeleted:false,
      isRoleUpdated:false,
      data: {
        RoleName: '',
        RoleDescription: '',
        policyTitle: [],
        filter: 'ALL'
      },
      obj:{}
    };
  }


  componentDidMount() {
    this.props.fetchpost()
    .then(response => // call api for get method
    this.setState({
      policyTitle: response.body  
     })  
    )
  }


// toggleCheckbox = (index) => {
//   const {policyTitle} = this.state;

//   policyTitle[index].checked = !policyTitle[index].checked;

//   this.setState({
//       policyTitle
//   });
// }

// renderCheckboxes = () => {
//   const{ filter, policyTitle } = this.state;

//   return policyTitle
//     .filter (Checkbox =>
//       filter === 'ALL' || filter === 'CHECKED' && Checkbox.checked || filter === 'UNCHECKED'&& !Checkbox.checked)
//       .map((Checkbox, index) => 
//       <div>
//       <label>
//           <input
//               type="Checkbox"
//               checked={Checkbox.checked}
//               onChange={toggleCheckbox.bind(this, index)}
//           />
//           {Checkbox.label}
//       </label>
//   </div>
//       );
//    }  
  
post = (data) => {
  return createPost(data).then(Data => {
    this.props.RolePostSuccess(Data)
  }).catch(error => {
    throw error;
  });
}

  onSubmit = (event)=> {
    event.preventDefault();
    // const {RoleName, RoleDescription, policyTitle} = this.state.data;
    const post =  {
      RoleName: this.state.data.RoleName,
      RoleDescription: this.state.data.RoleDescription,
      policyTitle: this.state.data.policyTitle
    }
    const error = this.validate();
    this.setState({ error });
    if(Object.keys(error).length === 0){
     this.post(this.state.data);
      this.props.push('post');
    }
  }

  validate = () => {
        const { data } = this.state;
        const error = {};
        if (!data.RoleName) error.RoleName = "Role Name can't be empty"  ;
        if (!data.RoleDescription) error.RoleDescription = "Please give your description";
        if(!data.policyTitle) error.policyTitle = " please insert your title ";
        console.log('-----------',error);
        return error;
      };

  onChange = (event)=> {
      const field = event.target.name;
      const data = this.state.data;
      data[field] = event.target.value;
      this.setState({
        data
      });
    }

      render() { console.log(this.state.error);
        return (
            <div>
          <RoleForm 
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            error={this.state.error}
            successMessage={this.state.successMessage}
            data={this.state.data}
          />
          </div>
        ); 
      }
  
  }


  const mapDispatchToProps = (dispatch) => {

    return {
      fetchpost: (data) => dispatch(fetchpost(data)),
      RolePostSuccess: (Data) => dispatch(RolePostSuccess(Data)),
      
       }
    }

  const mapStateToProps = (state) => {
    return {
      isRolePosted:state.isRolePosted,
      isRoleUpdated: state.isRoleUpdated,
      isRoleDeleted: state.isRoleDeleted

    }
  }

    export default withRouter (connect( mapStateToProps, mapDispatchToProps)(Role));



 