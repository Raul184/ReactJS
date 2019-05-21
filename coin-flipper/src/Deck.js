import React, { Component } from 'react'
import "./Deck.css";
import Coin from "./Coin";
//Helpers
import {choice} from "./Helpers";

export default class Deck extends Component{
  static defaultProps = {
    coins:[
      { side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      { side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props){
    super(props);
    this.state = {
      currFace : null,
      flips: 0,
      heads: 0,
      tails: 0
    }
  }
  // ON CLICK
  handleClick = () =>{
    //COIN
    let nueCoin = choice(this.props.coins);
    console.log(nueCoin);
    //stats state
    this.setState( oldSt => {
      return {
        currFace: nueCoin,
        flips: oldSt.flips + 1,
        heads: oldSt.heads + (nueCoin.side ==="heads" ? 1 : 0),
        tails: oldSt.tails + (nueCoin.side === "tails" ? 1 : 0)
      }
    })
  }
  //cara={this.state.currFace.imgSrc} text={this.state.currFace.side}
  render() {
    return (
      <div className="Deck">
        <h1 className="Deck-title">
          Let's flip a coin!!
        </h1>
        
        {this.state.currFace && <Coin info={this.state.currFace} />}
        
        <button className="Deck-btn" onClick={this.handleClick}>
          Flip Me!!
        </button>
        <p className="Deck-text">
          {`Out of ${this.state.flips} flips, there has been ${this.state.heads} heads and ${this.state.tails} tails.`}
        </p>
      </div>
    )
  }
}
