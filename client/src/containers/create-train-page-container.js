import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page from '../components/page/page';
import CreateTrainForm from '../components/create-train-form/create-train-form';

class CreateTrainPageContainer extends Component {
  render() {
    if (!this.props.loggedIn) return <Redirect to="/login" />;

    return (
      <Page whiteColor>
        <h1 className="page__title">Create train</h1>
        <CreateTrainForm history={this.props.history} />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.user
  };
};

export default connect(mapStateToProps)(CreateTrainPageContainer);
