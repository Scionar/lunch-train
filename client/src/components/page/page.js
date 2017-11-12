import React, { Component } from 'react';
import './page.css';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="page__title">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
