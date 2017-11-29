import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      joined: props.joined || false,
      cardClasses: this.updateCardClasses(),
      joinClasses: this.updateJoinClasses(props.joined),
      leaveClasses: this.updateLeaveClasses(props.joined)
    };
    this.updateCardClasses = this.updateCardClasses.bind(this);
    this.updateJoinClasses = this.updateJoinClasses.bind(this);
    this.updateLeaveClasses = this.updateLeaveClasses.bind(this);
    this.toggleOpening = this.toggleOpening.bind(this);
    this.toggleJoining = this.toggleJoining.bind(this);
    this.listParticipants = this.listParticipants.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      joined: nextProps.joined || false
    });
  }

  updateCardClasses(opened) {
    let result = ['card'];
    if (opened) result.push('card_opened');
    return result.join(' ');
  }

  updateJoinClasses(joined) {
    let result = ['join-button', 'button', 'button_slim'];
    if (joined) result.push('button_hidden');
    return result.join(' ');
  }

  updateLeaveClasses(joined) {
    let result = ['leave-button', 'button', 'button_slim'];
    if (!joined) result.push('button_hidden');
    return result.join(' ');
  }

  toggleOpening() {
    const currentState = this.state.opened;
    this.setState({
      opened: !currentState,
      cardClasses: this.updateCardClasses(!currentState)
    });
  }

  toggleJoining() {
    const currentState = this.state.joined;
    this.props.updateJoinAction(!currentState);
    this.setState({
      joined: !currentState,
      joinClasses: this.updateJoinClasses(!currentState),
      leaveClasses: this.updateLeaveClasses(!currentState)
    });
  }

  listParticipants() {
    return this.props.participans
      ? this.props.participans.map(participant => participant.name).join(', ')
      : '';
  }

  render() {
    return (
      <div className={this.state.cardClasses}>
        <div className="card__header">
          <h2 className="card__restaurant-name">{this.props.restaurant}</h2>
          <div className="card__train-leader">{this.props.leader}</div>
          <div className="card__start-time">{this.props.startTime}</div>
        </div>
        <div className="card__participants">{this.listParticipants()}</div>
        <div className="card__actions">
          <a onClick={this.toggleJoining} className={this.state.joinClasses}>
            Join
          </a>
          <a onClick={this.toggleJoining} className={this.state.leaveClasses}>
            Leave
          </a>
          <a onClick={this.toggleOpening} className="button button_slim">
            Participants
          </a>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  updateJoinAction: () => {}
};

export default Card;
