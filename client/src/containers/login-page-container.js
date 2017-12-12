import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page from '../components/page/page';
import FirebaseLogin from '../components/firebase-login/firebase-login';
import userManagement from '../user-management';

class LoginPageContainer extends Component {
  componentDidMount() {
    userManagement.initialize();
    userManagement.uiConfig();
  }

  render() {
    if (this.props.loggedIn) return <Redirect to="/" />;

    return (
      <Page whiteColor>
        <h1 className="page__title">Lunch train</h1>
        <FirebaseLogin />
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
