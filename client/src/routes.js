import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './components/page';

export default () => (
  <Switch>
    <Route exact path="/" component={Page} />
  </Switch>
);
