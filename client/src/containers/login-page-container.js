import React, { Component } from 'react';
import Page from '../components/page/page';
import LoginForm from '../components/login-form/login-form';

export default class PageContainer extends Component {
  state = { comments: [] };

  componentDidMount() {
    this.setState({
      title: 'Lunch train'
    });
  }

  render() {
    return (
      <Page>
        <h1 className="page__title">Lunch train</h1>
        <LoginForm />
      </Page>
    );
  }
}
