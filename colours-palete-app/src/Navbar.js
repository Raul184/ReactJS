import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
//select
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
// Snackbar
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
// npm install @material-ui/icons

import './Navbar.css';
import { IconButton } from '@material-ui/core';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      format: "hex" ,
      open: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.closeSb = this.closeSb.bind(this);
  }
  
  handleChange(e){
    //Update state in parent component
    this.props.handleChange(e.target.value);
    //Set state in child component
    this.setState({
      format : e.target.value ,
      open: true
    })
    
  }
  //Close Button Snackbar
  closeSb(){
    this.setState({
      open: false
    })
  }
  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">React Color Picker</Link>
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
        <Snackbar 
          anchorOrigin={{vertical: "bottom" , horizontal: "left"}}   
          open={this.state.open}  
          autoHideDuration={3000}
          message={<span id="message-id">Format changed to {this.state.format}</span>}
          ContentProps={{ "aria-describedby": "message-id"}}
          //click on screen and close it
          onClose={this.closeSb}
          action={[
            <IconButton onClick={this.closeSb} color="inherit" key="close" aria-label="close">
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}
