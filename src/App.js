import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import "./css/main.css";


import Contacts from './views/contacts';
import Create from './views/create';
import Login from './views/login';
import Signup from './views/signup';

class App extends Component {
  render() {
      return  (
          <BrowserRouter className="mainc">
            <Fragment>
              <main>
                <Switch>
                  <Route exact path="/contacts" component={Contacts} />
                  <Route exact path="/create" component={Create} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  {/* <Route component={NotFound} /> */}
                </Switch>
              </main>
            </Fragment>
          </BrowserRouter>
      );
    }
}

export default App;
