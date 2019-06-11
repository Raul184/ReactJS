import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
export default class Food extends Component {
  render() {
    const food = this.props.match.params.name;
    const url = `https://source.unsplash.com/1600x900/?${food}`;
    return (
      <div className="Food">
      {/* OPTION 1 for redirect */}
        {/\d/.test(food) ? <Redirect to="/" /> : 
        <div>
          <h1>I love to eat {food}</h1>
          <img src={url} alt="food"/>
        </div>
        }
      </div>
    )
  }
}
