import React, { Component } from 'react'
import './VendingMachine.css';
import vendingImg from './VendingMachine.png';

export default class VendingMachine extends Component {
  render() {
    return (
      <div 
        className="VendingMachine"
        style={{backgroundImage: `url(${vendingImg})`}}>
        <h1>I am Mr.Vending Machine, what would you like to eat?</h1>
      </div>
    )
  }
}
