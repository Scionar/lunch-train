import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageContainer from './components/pagecontainer/pagecontainer';

export default () => (
  <Switch>
    <Route exact path="/" component={PageContainer} />
  </Switch>
);
