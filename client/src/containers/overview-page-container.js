import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page from '../components/page/page';
import Card from '../components/card/card';
import EmptyOverviewNote from '../components/empty-overview-note/empty-overview-note';
import getLoggedInStatus from '../helpers/get-logged-in-status';
import getAllTrains from '../helpers/get-all-trains';

class OverviewPageContainer extends Component {
  createTrainCards() {
    const trainList = this.props.trains;

    if (!trainList.length) return <EmptyOverviewNote />;

    return trainList.map(train => {
      return <Card>{train.restaurant}</Card>;
    });
  }

  render() {
    if (!this.props.loggedIn) return <Redirect to="/login" />;

    return (
      <div>
        <Page>{this.createTrainCards()}</Page>
      </div>
    );
  }
}

const testingData = [
  { restaurant: 'Sushi bar', driver: 'Testuser', startTime: '11:15' }
];

const mapStateToProps = state => {
  return {
    loggedIn: getLoggedInStatus(state),
    trains: getAllTrains(testingData)
  };
};

export default connect(mapStateToProps)(OverviewPageContainer);
