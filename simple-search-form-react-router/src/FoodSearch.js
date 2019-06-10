import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class FoodSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e){
    this.setState({
      query : e.target.value
    });
  }
  handleClick(){
    // do something
    alert("Saved your food to DB");
    //redirect
    this.props.history.push(`/food/${this.state.query}`);
  }
  render() {
    return (
      <div>
        <h1>Search for A food!</h1>
        <input 
          type="text" 
          name="query" 
          value={this.state.query} 
          onChange={this.handleChange}
          placeholder="Search for a food"
        />  
        {/* //take me to another route LINKS IN SEARCH FORMS */}
        <Link to={`/food/${this.state.query}`}>Go!</Link>
        <button onClick={this.handleClick}>Save new food!</button>
      </div>
    )
  }
}
