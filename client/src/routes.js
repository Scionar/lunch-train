import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageContainer from './components/pagecontainer/pagecontainer';
import LoginPageContainer from './components/login-page-container/login-page-container';

export default () => (
  <Switch>
    <Route exact path="/" component={PageContainer} />
    <Route exact path="/login" component={LoginPageContainer} />
  </Switch>
);
