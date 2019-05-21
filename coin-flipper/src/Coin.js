import React, { Component } from 'react'
import "./Coin.css";

export default class Coin extends Component {
  render() {
    return (
        <img className="Coin-img" src={this.props.info.imgSrc} alt={this.props.info.side}></img>
    )
  }
}
