import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page from '../components/page/page';
import getLoggedInStatus from '../helpers/get-logged-in-status';

class OverviewPageContainer extends Component {
  render() {
    if (!this.props.loggedIn) return <Redirect to="/login" />;

    return (
      <Page>
        <h1 className="page__title">Page title</h1>
        <p>The page content.</p>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: getLoggedInStatus(state)
  };
};

export default connect(mapStateToProps)(OverviewPageContainer);
