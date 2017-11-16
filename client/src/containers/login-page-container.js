import React, { Component } from 'react';
import Page from '../components/page/page';
import LoginForm from '../components/login-form/login-form';

class LoginPageContainer extends Component {
  render() {
    return (
      <Page>
        <h1 className="page__title">Lunch train</h1>
        <LoginForm />
      </Page>
    );
  }
}

export default LoginPageContainer;
