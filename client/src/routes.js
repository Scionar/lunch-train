import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OverviewPageContainer from './containers/overview-page-container';
import LoginPageContainer from './containers/login-page-container';
import CreateTrainPageContainer from './containers/create-train-page-container';

const Routes = props => (
  <Switch>
    <Route exact path="/" component={OverviewPageContainer} />
    <Route exact path="/login" component={LoginPageContainer} />
    <Route exact path="/create" component={CreateTrainPageContainer} />
  </Switch>
);

export default Routes;
