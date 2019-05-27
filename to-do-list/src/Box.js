import React, { Component } from 'react'
import "./Box.css";
export default class Box extends Component {
  render() {
    return (
      <div className="Box" style={this.props.styles}> 
      <button className="Box-btn">X</button>
      </div>
    )
  }
}
