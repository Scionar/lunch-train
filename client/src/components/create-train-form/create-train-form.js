import React, { Component } from 'react';
import createTrain from '../../helpers/user-action/create-train';
import TimePicker from 'react-bootstrap-time-picker';
import moment from 'moment';
import './create-train-form.css';

class CreateTrainForm extends Component {
  constructor() {
    super();
    this.state = {
      leader: '',
      restaurantName: '',
      startTime: 28800 // 8:00 AM
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(value) {
    this.setState({
      startTime: value
    });
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

    const startTime = this.state.startTime;
    const hours = Math.floor(startTime / 3600);
    const minutes = Math.floor((startTime % 3600) / 60);
    let dateMaker = moment();
    dateMaker.hours(hours).minutes(minutes);
    dateMaker.utcOffset(120);
    const unixTime = dateMaker.valueOf();

    const restaurant = this.state.restaurantName;
    const leader = this.state.leader;

    createTrain(restaurant, leader, unixTime, () => {
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

        <TimePicker
          start="8:00"
          end="16:00"
          step={30}
          onChange={this.handleTimeChange}
          name="startTime"
          value={this.state.startTime}
          className="create-train-form__start-time text-input"
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

export default CreateTrainForm;
