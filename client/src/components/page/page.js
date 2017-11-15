import React, { Component } from 'react';
import './page.css';

class Page extends Component {
  render() {
    return <div className="page">{this.props.children}</div>;
  }
}

export default Page;
