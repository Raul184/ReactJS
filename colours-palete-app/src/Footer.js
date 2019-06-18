import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {this.props.flagName}
        <span className="emoji">{this.props.emoji}</span>
      </footer>
    )
  }
}
