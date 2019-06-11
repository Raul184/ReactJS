import React, { Component } from 'react'

export default class Meal extends Component {
  render() {
    const food = this.props.match.params.foodName;
    const drink = this.props.match.params.drinkName;
    const foodUrl = `https://source.unsplash.com/1600x900/?${food}`;
    const drinkUrl = `https://source.unsplash.com/1600x900/?${drink}`;
    return (
      <div className="Meal">
        <h1>This is a meal of {food} + {drink}</h1>
        <img src={foodUrl} alt="food" />
        <img src={drinkUrl} alt="drink"/>
      </div>
    )
  }
}
