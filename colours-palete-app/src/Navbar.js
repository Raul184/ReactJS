import React, { Component } from 'react'
//slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">React Color Picker</a>
        </div>
        <div className="slider-container">
          <span>Level :</span>
          <div className="slider">
            <Slider 
              defaultValue={this.props.level} 
              min={100} 
              max={900} 
              step={100} 
              onAfterChange={this.props.changeLevel} 
            />
          </div>
          <span><em>{this.props.level}</em></span>
        </div>
      </header>
    )
  }
}
