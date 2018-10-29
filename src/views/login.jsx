import React, {Fragment} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../css/main.css";


const Login = () => {
  return (
    <Fragment>
      <div className="container d-flex m-auto">
        <Form className = "col-sm-4 m-auto">
          <FormGroup>
               <Label for="exampleEmail">username</Label>
               <Input type="user" name="user" id="username" />
           </FormGroup>
           <FormGroup>
             <Label for="examplePassword">password</Label>
             <Input type="password" name="password" id="examplePassword" />
           </FormGroup>
           <Button>login</Button>
         </Form>
       </div>
    </Fragment>
  );
}

export default Login;
