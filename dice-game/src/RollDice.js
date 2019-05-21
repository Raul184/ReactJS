import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props){
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one' ,
      isRolling: false 
    }
  }
  roll = () =>{
    console.log('test');
    // pick 2 rolls
    let nuedie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    let nuedie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    //set state
    this.setState({
      die1 : nuedie1,
      die2 : nuedie2,
      isRolling : true 
    });
    setTimeout(() => { this.setState({isRolling : false})}, 1000);

  }
  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-can'>
          <Die face={this.state.die1} animation={this.state.isRolling}/>
          <Die face={this.state.die2} animation={this.state.isRolling}/>
        </div>
        <button className="RollDice-btn" onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>        
      </div>
    )
  }
}
