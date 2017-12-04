import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Page from '../components/page/page';
import Card from '../components/card/card';
import AddButton from '../components/add-button/add-button';
import EmptyOverviewNote from '../components/empty-overview-note/empty-overview-note';
import updateAllTrains from '../helpers/update-state/update-all-trains';
import joinTrain from '../helpers/user-action/join-train';
import leaveTrain from '../helpers/user-action/leave-train';

class OverviewPageContainer extends Component {
  constructor(props) {
    super(props);
    this.createJoinAction = this.createJoinAction.bind(this);
  }

  componentWillMount() {
    updateAllTrains();
  }

  createJoinAction(uid, trainId) {
    return function(newStatus) {
      newStatus ? joinTrain(uid, trainId) : leaveTrain(uid, trainId);
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
          updateJoinAction={this.createJoinAction(
            this.props.user.uid,
            train._id
          )}
          joined={train.joined}
        />
      );
    });
  }

  render() {
    if (!this.props.loggedIn) return <Redirect to="/login" />;

    return (
      <div>
        <Page>
          {this.createTrainCards()}
          <Link to="/create">
            <AddButton />
          </Link>
        </Page>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.user,
    trains: state.trains,
    user: state.user
  };
};

export default connect(mapStateToProps)(OverviewPageContainer);
