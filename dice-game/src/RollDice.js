import React, { Component } from 'react'
import Die from './Die';
//CSS
import './RollDice.css';


export default class RollDice extends Component {
  constructor(props){
    super(props);
    this.state = {
      dice1 : 1,
      dice2 : 1
    }
  }  
    //Method to roll Dice
    myHandler = () => {
      //dice 1 y 2
      let random1 = Math.floor(Math.random() * 6);
      let random2 = Math.floor(Math.random() * 6);
      this.setState({
        dice1 : random1,
        dice2 : random2
      });      
    }
  
  render() {
    return (
      <div className="RollDice">
        {/* Dice1 */}
        <Die num={this.state.random1}/>
        {/* Dice2 */}
        <Die num={this.state.random2}/>
        <button className="RollDice-btn" onClick={this.myHandler}>Rolling...</button>
      </div>
    )
  }
}
