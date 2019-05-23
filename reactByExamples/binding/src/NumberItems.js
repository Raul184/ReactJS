import React, { Component } from 'react'
//import { directive } from '@babel/types';

export default class NumberItems extends Component {
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(e){
    this.props.act(this.props.value);
  }
  render() {
    return (
      <li className="NumberItems">
        {this.props.value}
        <button className="NumberItems-btn" onClick={this.handleRemove}>X</button>
      </li>
    )
  }
}
