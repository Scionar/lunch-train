import React, { Component } from 'react';
import './add-button.css';

class AddButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div onClick={this.props.onClickAction} className="add-button" />;
  }
}

export default AddButton;
