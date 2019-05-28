import React, { Component } from 'react'
import './BoxForm.css';
import uuid from 'uuid/v4';
export default class BoxForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: "",
      width: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name] : [e.target.value]
    });
  }
  handleSubmit(e){
    e.preventDefault();
    // create new box from form
    const nueBox = {
      ...this.state, id: uuid()
    }
    this.props.createBox(nueBox);
    // restart state
    this.setState({
      height: "",
      width: "",
      color: ""
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          {/* height */}
          <label htmlFor="height">Height</label>
          <input id="height" 
            name="height" 
            type="text" 
            value={this.state.height} 
            onChange={this.handleChange}>
          </input>
          {/* width */}
          <label htmlFor="width">Width</label>
          <input id="width" 
            name="width" 
            type="text" 
            value={this.state.width} 
            onChange={this.handleChange}>
          </input>
          {/* backgroundColor */}
          <label htmlFor="color">BackgroundColor</label>
          <input id="color" 
            name="color" 
            type="text" 
            value={this.state.color} 
            onChange={this.handleChange}>
          </input>
          <button className="BoxesDeck-btn">Make new box</button>
      </form>
    )
  }
}
