import React, { Component } from 'react';
import Page from '../page/page';
import LoginForm from '../login-form/login-form';

export default class PageContainer extends Component {
  state = { comments: [] };

  componentDidMount() {
    this.setState({
      title: 'Lunch train'
    });
  }

  render() {
    return (
      <Page title={this.state.title} children={this.state.content}>
        <LoginForm />
      </Page>
    );
  }
}
