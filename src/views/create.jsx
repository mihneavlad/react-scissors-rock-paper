import React, {Fragment} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../css/main.css";


const Create = () => {
  return (
    <Fragment>
      <div className="container d-flex m-auto">
        <Form className = "col-sm-4 m-auto">
          <h5 className="mb-4">Create Contact</h5>
          <FormGroup>
               <Label for="firstname">first name</Label>
               <Input type="firstname" name="firstname" id="firstname" />
           </FormGroup>
           <FormGroup>
                <Label for="lastname">last name</Label>
                <Input type="lastname" name="lastname" id="lastname" />
            </FormGroup>
           <Button>submit</Button>
         </Form>
       </div>
    </Fragment>
  );
}

export default Create;
