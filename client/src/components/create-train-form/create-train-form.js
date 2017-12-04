import React, { Component } from 'react';
import './create-train-form.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      loginEmail: '',
      loginPassword: ''
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
    const restaurantName = this.state.restaurantName;
    const startTime = this.state.startTime;
  }

  handleCancel(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-train-form">
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
