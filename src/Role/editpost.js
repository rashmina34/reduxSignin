import React, {PropTypes} from 'react';  
import RoleForm from './roleForm'
import {connect} from 'react-redux';  
import UpdateData from './../LogIn/apiConnection';

class EditRole extends React.Component  {
    constructor( props, context){
        super(props,context);
        this.state = {
            isRoleUpdated: false,
            data : {
            RoleName: this.props.RoleName,
            RoleDescription: this.props.RoleDescription,
            policy_title: this.props.policy_title,
            // checkboxpolicy: this.props.checkboxpolicy,// after  placing the checkbox
            }
        };
        this.updatePolicy = this.updatePolicy.bind(this);
        this.updateState = this.updateState.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.saveState = this.saveState.bind(this);
    }

    saveState(event){
        event.preventDefault();
        this.props.action.UpdateData(this.state.data);// here UpdateData must hit api
    }

    updateState(event){
        const field = event.target.RoleName;
        const data = this.state.data;
        data[field] = event.target.value;
        return this.setState({data: data});
    }

    updatePolicy(event){
        const data = this.state.data;
        const policy_Id = event.target.value;
        const policy = this.state.policyCheckbox.filter(policy => policy.id) policy_Id[0]// not getting either this statement is right or wrong
        const checked = !policy.checked;
        policy['checked'] = !policy.checked;
        if(checked){
            data.policy_Id.push(policy.id)
        }else { 
            data.policy_Id.splice(data.policy_Id.indexOf(policy.id));
        }
        this.setState({data: data})
    }

    toggleEdit(){
        this.setState({
            isRoleUpdated: !this.state.isRoleUpdated
        })
    }


    // componentWillReceiveProps(nextProps){ ////////////complete the life cycle
    //     if(this.prop.data.id!== nextProps.data.id){
        // this.setState({policy: nextProps.policy})
    // }
    // if( che) ==============insert checkbox condition here
    // }

     policyTitlecheckbox = ( policy_title, policy = null ) => {
         return policy_title.map(policies => {
             if(policy && policy.policy_ids.filter(policy_Id => policy_Id.policies.id).length > 0){
                 policies['checked'] = true;
             } else {
                 policies['checked'] = false;
             }
             return policies
        })
    }

    render(){
        if(this.state.isRoleUpdated){
            return(
                <div>
                    <h1>Editing</h1>
                    <RoleForm /> 
                </div>
            )
        }
        return(
            <div>
            <p>RoleName: {this.state.RoleName}</p>
            <p>RoleDescription: {this.state.RoleDescription}</p>
            <button onClick = { this.toggleEdit}>Edit</button>
            </div>

        );
    }
}
 EditRole.PropTypes = {
      RoleName: PropTypes.object.isRequired,
      RoleDescription: PropTypes.object.isRequired,
      //============== keep checkbox function here as proptype=====
 }


 //==============dispatch method is not completed ===========
// const mapStateToProps = (state, ownProps) => {
//     const stateploicy = Object.assign([], state.policy_title);
//     let checkboxpolicy = [];
//     let policy = [];
//     let Role = { RoleName: '' , RoleDescription: '', policy_Id: []};
//     const policyId = ownProps.params._id;
//     if(policyId && state.RoleName.length > 0 && state.policy_title.length>0){
//         Role = getRoleById(state.RoleName, ownProps.params._id);
//         if (Role.policy_Id.length>0){
//             checkboxpolicy = policyCheckboxes()
//         }  
//     }
// }

export default EditRole;