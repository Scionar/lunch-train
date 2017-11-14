import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageContainer from './containers/page-container';
import LoginPageContainer from './containers/login-page-container';

export default () => (
  <Switch>
    <Route exact path="/" component={PageContainer} />
    <Route exact path="/login" component={LoginPageContainer} />
  </Switch>
);
