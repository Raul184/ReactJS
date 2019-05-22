import React, { Component } from 'react'
import './Lotto.css';
import Ball from './Ball.js';

export default class Lotto extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6 ,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({length: this.props.numBalls})
      //test1: 0
    }
  }
  //ON-CLICK Event
  generate(){
    this.setState( currState => ({
      nums: currState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }
  handleClick = () => {
    //Generate nums and assigned them to state
    this.generate();
  }
  render() {
    return (
      <section className="Lotto">
        <h1 className="Lotto-title">{this.props.title}</h1>
        <div className="Lotto-can">
          {this.state.nums.map( n => <Ball ballNumber={n} />) }      
        </div>  
        <button className="Lotto-btn" onClick={this.handleClick}>Generate</button>
      </section>
    )
  }
}
