import React, { Component } from 'react';
import createTrain from '../../helpers/user-action/create-train';
import './create-train-form.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      leader: '',
      restaurantName: '',
      startTime: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const restaurant = this.state.restaurantName;
    const startTime = this.state.startTime;
    const leader = this.state.leader;
    createTrain(restaurant, leader, startTime, () => {
      this.props.history.push('/');
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-train-form">
        <input
          onChange={this.handleInputChange}
          value={this.state.leader}
          name="leader"
          className="create-train-form__leader text-input"
          placeholder="Your name"
          type="textfield"
        />

        <input
          onChange={this.handleInputChange}
          value={this.state.restaurantName}
          name="restaurantName"
          className="create-train-form__restaurant text-input"
          placeholder="Restaurant name"
          type="textfield"
        />

        <input
          onChange={this.handleInputChange}
          value={this.state.startTime}
          name="startTime"
          className="create-train-form__start-time text-input"
          placeholder="Start time"
          type="textfield"
        />

        <input
          className="create-train-form__create button"
          type="submit"
          value="Create"
        />

        <input
          className="create-train-form__cancel button"
          type="button"
          value="Cancel"
          onClick={this.handleCancel}
        />
      </form>
    );
  }
}

export default LoginForm;
