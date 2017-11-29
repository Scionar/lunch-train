import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Page from '../components/page/page';
import Card from '../components/card/card';
import EmptyOverviewNote from '../components/empty-overview-note/empty-overview-note';
import getLoggedInStatus from '../helpers/get-logged-in-status';
import getAllTrains from '../helpers/get-all-trains';
import updateAllTrains from '../helpers/update-all-trains';
import updateTrainJoin from '../helpers/update-train-join';

class OverviewPageContainer extends Component {
  constructor() {
    super();
    this.createJoinAction = this.createJoinAction.bind(this);
    updateAllTrains();
  }

  createJoinAction(uid, trainId) {
    return function(joinedStatus) {
      return updateTrainJoin(joinedStatus, uid, trainId);
    };
  }

  createTrainCards() {
    const trainList = this.props.trains;

    if (!trainList.length) return <EmptyOverviewNote />;

    return trainList.map((train, trainIndex) => {
      return (
        <Card
          key={trainIndex}
          id={train._id}
          restaurant={train.restaurant}
          leader={train.leader}
          startTime={train.startTime}
          participans={train.participans}
          updateJoinAction={this.createJoinAction(this.props.uid, train._id)}
          joined={false}
        />
      );
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

const mapStateToProps = state => {
  return {
    loggedIn: getLoggedInStatus(state),
    trains: getAllTrains(state.trains),
    uid: state.user.uid
  };
};

export default connect(mapStateToProps)(OverviewPageContainer);
