import React, { Component } from 'react';
import './App.css';
import './timeline.css';
import 'font-awesome/css/font-awesome.css';

class Footer extends Component {
  render() {
    return (
      <div className="header">
        {this.props.children}
      </div>
    );
  }
}

export default Footer;
