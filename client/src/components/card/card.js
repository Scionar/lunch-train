import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.getCardClasses = this.getCardClasses.bind(this);
    this.getJoinClasses = this.getJoinClasses.bind(this);
    this.getLeaveClasses = this.getLeaveClasses.bind(this);
    this.toggleOpening = this.toggleOpening.bind(this);
    this.toggleJoining = this.toggleJoining.bind(this);
    this.listParticipants = this.listParticipants.bind(this);
  }

  getCardClasses() {
    const opened = this.state.opened;
    const joined = this.props.joined;
    let result = ['card'];
    if (opened) result.push('card_opened');
    if (joined) result.push('card_joined');
    return result.join(' ');
  }

  getJoinClasses() {
    const joined = this.props.joined;
    let result = ['join-button', 'button', 'button_slim'];
    if (joined) result.push('button_hidden');
    return result.join(' ');
  }

  getLeaveClasses() {
    const joined = this.props.joined;
    let result = ['leave-button', 'button', 'button_slim'];
    if (!joined) result.push('button_hidden');
    return result.join(' ');
  }

  toggleOpening() {
    const currentState = this.state.opened;
    this.setState({
      opened: !currentState
    });
  }

  toggleJoining() {
    const currentState = this.props.joined;
    this.props.updateJoinAction(!currentState);
  }

  listParticipants() {
    return this.props.participants ? this.props.participants.join(', ') : '';
  }

  render() {
    return (
      <div className={this.getCardClasses()}>
        <div className="card__header">
          <h2 className="card__restaurant-name">{this.props.restaurant}</h2>
          <div className="card__train-leader">{this.props.leader}</div>
          <div className="card__start-time">{this.props.startTime}</div>
        </div>
        <div className="card__participants">{this.listParticipants()}</div>
        <div className="card__actions">
          <a onClick={this.toggleJoining} className={this.getJoinClasses()}>
            Join
          </a>
          <a onClick={this.toggleJoining} className={this.getLeaveClasses()}>
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
  updateJoinAction: () => {},
  joined: false
};

export default Card;
