import React, { Component } from 'react';
import Page from '../page/page';

export default class PageContainer extends Component {
  state = { comments: [] };

  componentDidMount() {
    this.setState({
      title: 'Page title',
      content: 'This is page content.'
    });
  }

  render() {
    return <Page title={this.state.title} content={this.state.content} />;
  }
}
