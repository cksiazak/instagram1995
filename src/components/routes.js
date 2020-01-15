import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Home from './Home';
import Login from './Login';
import Register from './Register';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  );
};

export default Routes;
