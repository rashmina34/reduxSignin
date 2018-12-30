import React from 'react'
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react'
import InputField from './../LogIn/inputfield';

const RoleForm = (
    {
      data,
      error,
      onSubmit,
      successMessage,
      onChange
    }) => { 
        return(
   <Form onSubmit={onSubmit}>
   {successMessage && <p className="success-message">{successMessage}</p>}
    {error.RoleName && <p className="error-message">{error.RoleName}</p>}
    {error.RoleDescription && <p className="error-message">{error.RoleDescription}</p>}
    {error.policyTitle && <p className="error-message">{error.policyTitle}</p>}


    <InputField
      type="text"
      label="Role Name"
      name="RoleName"
      placeholder="Role_Name"
      className="form-control"
      value={data.RoleName || ''}
      onChange={onChange}
        
    />


    <InputField
        type="text"
        label="Role Description"
        name="RoleDescription"
        placeholder="Role_Description"
        className="form-control"
        value={data.RoleDescription || ''}
        onChange={onChange}
            
        />

{/* 
    <InputField
        type="text"
        label="Policy Title"
        name="policyTitle"
        placeholder="Policy Title"
        className="form-control"
        value={data.policyTitle || ''}
        onChange={onChange}
            
        /> */}
   
    <Button 
      type="submit"
    >POST</Button>
  </Form>
)};

RoleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default RoleForm