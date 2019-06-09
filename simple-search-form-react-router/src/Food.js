import React, { Component } from 'react'

export default class Food extends Component {
  render() {
    const food = this.props.match.params.name;
    const url = `https://source.unsplash.com/1600x900/?${food}`;
    return (
      <div className="Food">
        <h1>My favorite food is {food}</h1>
        <img src={url} alt="food"/>
      </div>
    )
  }
}
