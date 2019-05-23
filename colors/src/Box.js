import React, { Component } from 'react'
import './Box.css';
//helpers 
import {choice} from './helpers';

export default class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: choice(this.props.allColors)
    };
  }
  //ON CLick
  handleClick = () => {
    //Get new color
    let nueColor; 
    do{
      nueColor = choice(this.props.allColors);
    }while( nueColor === this.state.color);

    this.setState({ color: nueColor })
  }
  render() {
    return (
      <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}> 
      </div>
    )
  }
}
