import React, { Component } from 'react'
import chipsImg from './Chips.png';
import { Link } from 'react-router-dom';
import Message from './Message';
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
        <Message>
          <h1>Papas eaten: {this.state.bags.length}</h1>
          <Link to='/'>Go Back</Link>
        </Message>
        {bags}
        <button className="Chips-btn" onClick={this.handleClick}>Ñam Ñam</button>
        
      </div>
    )
  }
}
