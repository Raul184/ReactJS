import React, { Component } from 'react'

export default class FoodSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    [e.target.name] = e.target.value;
  }
  render() {
    return (
      <div>
        <input 
          type="text" 
          name="query" 
          value={this.state.query} 
          onChange={this.handleChange}
          placeholder="Search for food"/>
      </div>
    )
  }
}
