import React, { Component } from 'react'
import chipsImg from './Chips.png';
import { Link } from 'react-router-dom';

export default class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: []
    };
    this.handleClick = this.handleClick.bind(this);
   }
   //ON Click
   handleClick(){
     let x,y;
     y = window.innerHeight * Math.random();
     x = window.innerWidth * Math.random();
     console.log(x);
     console.log(y);
     this.setState(prevSt => ({
       bags: [...prevSt.bags , {x , y}]
     }));
   }

  render() {
    const bags = this.state.bags.map( (bag, i) => (
      <img
        key={i} 
        src={chipsImg}
        className="bag"
        style={{top: `${bag.y}px` , left: `${bag.x}px`}} 
        alt='Papas' 
      />
    ))
    return (
      <div className="Chips">
        <h1>Papas eaten: {this.state.bags.length}</h1>
        {bags}
        <button className="Chips-btn" onClick={this.handleClick}>Ñam Ñam</button>
        <Link to='/'>Go Back</Link>
      </div>
    )
  }
}
