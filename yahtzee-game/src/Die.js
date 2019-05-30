import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  // DEFAULTS
  static defaultProps = {
    numWords:['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numWords, locked, val, disabled, rolling} = this.props;
    //Dices
    let imag = `Die fas fa-dice-${numWords[(val - 1)]} fa-4x`;
    //Styles
    if(locked) imag += ' Die-locked';   //Lock dices 
    if(rolling) imag += ' Die-rolling'; //animate dices
    return <i className={imag} onClick={this.handleClick} disabled={disabled}/>
  }
}

export default Die;
