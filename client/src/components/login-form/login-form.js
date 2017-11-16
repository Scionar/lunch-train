import React, { Component } from 'react';
import { auth } from '../../user-management';
import './login-form.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      loginEmail: '',
      loginPassword: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
    const email = this.state.loginEmail;
    const password = this.state.loginPassword;
    auth.signInWithEmailAndPassword(email, password);
  }

  handleLogout(event) {
    event.preventDefault();
    auth.signOut();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <input
          onChange={this.handleInputChange}
          value={this.state.loginEmail}
          className="login-form__email text-input"
          placeholder="Email"
          type="textfield"
          name="loginEmail"
        />

        <input
          onChange={this.handleInputChange}
          value={this.state.loginPassword}
          name="loginPassword"
          className="login-form__password text-input"
          placeholder="Password"
          type="password"
        />

        <input
          className="login-form__submit button"
          type="submit"
          value="Login"
        />

        <input
          className="login-form__submit button"
          type="button"
          value="Logout"
          onClick={this.handleLogout}
        />
      </form>
    );
  }
}

export default LoginForm;
