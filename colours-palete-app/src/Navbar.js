import React, { Component } from 'react'
//slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
//select
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";

import './Navbar.css';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      format: "hex"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    //Update state in parent component
    this.props.handleChange(e.target.value);
    //Set state in child component
    this.setState({
      format : e.target.value
    })
    
  }
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
        <div className="select-container">
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>  
          </Select>
        </div>
      </header>
    )
  }
}
