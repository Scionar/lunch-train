import React, { Component } from 'react';
import Page from '../page/page';

export default class LoginPageContainer extends Component {
  state = { comments: [] };

  componentDidMount() {
    this.setState({
      title: 'Page title'
    });
  }

  render() {
    return (
      <Page title={this.state.title}>
        <p>The page content.</p>
      </Page>
    );
  }
}
