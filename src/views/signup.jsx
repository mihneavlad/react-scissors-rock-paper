import React, {Fragment} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../css/main.css";


class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.baseURL = 'https://contact-manager.now.sh/api/v1/user';
    this.proxy = `http://localhost:1337/${this.baseURL}`;

  }


  handleChangeUsername(event) {
  this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
  this.setState({password: event.target.value});
  }


  handleSubmit(event) {

  event.preventDefault();

  fetch(`${this.proxy}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state)
  }).then(res => res.json())
    .then(data => {
      localStorage.setItem('contact-manager-token', data.token)
    })
}



  render() {
    return (
      <Fragment>
        <div className="container d-flex m-auto">
          <Form className = "col-sm-4 m-auto" onSubmit={this.handleSubmit}>
            <FormGroup>
                 <Label for="username">username</Label>
                 <Input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
             </FormGroup>
             <FormGroup>
               <Label for="password">password</Label>
               <Input type="password" name={this.state.password} onChange={this.handleChangePassword} />
             </FormGroup>
             <Button>sign up</Button>
           </Form>
         </div>
      </Fragment>
    );
  }
}

export default Signup;
