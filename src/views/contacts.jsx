import React, {Fragment} from 'react';
import { Form, Row, Col } from 'reactstrap';
import "../css/main.css";


const Contacts = () => {
  return (
    <Fragment>
      <div className="container d-flex m-auto">
        <Form className = "col-sm-4 m-auto">
          <h5 className="text-center mb-4">Contacts Table</h5>
          <Row>
            <Col className="text-center">First Name</Col>
            <Col className="text-center">Last Name</Col>
          </Row>
        </Form>
       </div>
    </Fragment>
  );
}

export default Contacts;
