import React, { Component } from 'react'
import './Lotto.css';
import Ball from './Ball.js';

export default class Lotto extends Component {
  static defaultProps = {
    numBalls: 6 ,
    maxValue: 40
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: [this.props.numBalls]
      //test1: 0
    }
  }
  //Number getter
  numsGetter = () =>{
    let random = Math.floor(Math.random() * this.props.maxNum)
    this.setState({
      test1 : random
    })
  }
  render() {
    return (
      <div className="Loto">
        <h1 className="Loto-title">{this.props.title}</h1>
        <div className="Loto-can">
          <Ball ballNumber={1} />
          <Ball ballNumber={1} />
          <Ball ballNumber={1} />
          <Ball ballNumber={1} />
        </div>  
        <button className="Loto-btn" onClick={this.numsGetter}>Generate</button>
      </div>
    )
  }
}
