import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OverviewPageContainer from './containers/overview-page-container';
import LoginPageContainer from './containers/login-page-container';

const Routes = props => (
  <Switch>
    <Route exact path="/" component={OverviewPageContainer} />
    <Route exact path="/login" component={LoginPageContainer} />
  </Switch>
);

export default Routes;
