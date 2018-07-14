import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'Modules/Home/Home';
import Test from 'Modules/Test/Test';
import Photos from 'Modules/Photos/Photos';
import Comments from 'Modules/Comments/Comments';
import Users from 'Modules/Users/Users';
import TodoLists from 'Modules/TodoLists/TodoLists';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/test" component={Test} exact />
        <Route path="/photos" component={Photos} exact />
        <Route path="/comments" component={Comments} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/todolists" component={TodoLists} exact />
      </Switch>
    );
  }
}

export default Routes;
