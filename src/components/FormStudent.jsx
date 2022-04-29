import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const FormStudent = (props) => {
  const { addName, addLastName, addEmail, onAddStudent } = props;

  return (
    <div>
        
      <Form class="m-3">
        <FormGroup class="m-3">
          <Label class="m-5">Name</Label>
          <Input class="my-3" onChange={addName} type="text" name="name" placeholder="Name"/>
        </FormGroup>
        <FormGroup class="my-3">
          <Label class="my-3">Last name</Label>
          <Input class="my-3" onChange={addLastName} type="text" name="lastName" placeholder="Last Name"/>
        </FormGroup>
        <FormGroup class="my-3">
          <Label class="my-3">Email</Label>
          <Input class="my-3" onChange={addEmail} type="email" name="email" placeholder="Email" />
        </FormGroup>
        <Button class="my-3" color="primary" type="submit" onClick={onAddStudent}>Add student</Button>
      </Form>
    </div>
  );
};

export default FormStudent;
