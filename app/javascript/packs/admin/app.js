//export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './top/header';
import MainLogin from './top/main_login';
import Index from './top/index';
import Footer from './top/footer';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/admin/login">
              <Header/>
              <MainLogin/>
              <Index/>
              <Footer/>
            </Route>
            <Route exact path="/admin/top">
              <Index/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
