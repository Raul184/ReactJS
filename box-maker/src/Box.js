import React, { Component } from 'react'
import "./Box.css";
export default class Box extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Box" 
        style={{
          height: `${this.props.height}em`,
          width: `${this.props.width}em`,
          backgroundColor: this.props.color 
        }}
      > 
        <button className="Box-btn" onClick={this.props.remove}>X</button>
      </div>
    )
  }
}
