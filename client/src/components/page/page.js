import React, { Component } from 'react';
import './page.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: this.updateClassList()
    };
    this.updateClassList = this.updateClassList.bind(this);
  }

  updateClassList() {
    let result = ['page'];
    if (this.props.whiteColor) result.push('page_white');
    return result;
  }

  componentWillReceiveProps() {
    this.setState({
      classList: this.updateClassList()
    });
  }

  render() {
    return (
      <div className={this.state.classList.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
