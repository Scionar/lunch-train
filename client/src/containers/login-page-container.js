import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page from '../components/page/page';
import LoginForm from '../components/login-form/login-form';

class LoginPageContainer extends Component {
  render() {
    if (this.props.loggedIn) return <Redirect to="/" />;

    return (
      <Page whiteColor>
        <h1 className="page__title">Lunch train</h1>
        <LoginForm />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.user
  };
};

export default connect(mapStateToProps)(LoginPageContainer);
