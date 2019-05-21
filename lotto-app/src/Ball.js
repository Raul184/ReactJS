import React, { Component } from 'react'
import './Ball.css';

export default class Ball extends Component {
  render() {
    return (
      <div className="Ball">
        <div className="Ball-circle">
          {this.props.ballNumber}
        </div>
      </div>
    )
  }
}
