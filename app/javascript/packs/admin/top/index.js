import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Top from './top';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/admin/top" component={Top}/>
        </Switch>
      </div>
    );
  }
}
