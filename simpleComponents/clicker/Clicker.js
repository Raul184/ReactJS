import React, { Component } from 'react'

class Clicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 1
    }
  }
  //Method
  counter = (e) => {
    let random = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: random });
  }
  render() {
    return (
      <div className="Clicker">
        <h1>Number is: {this.state.num}</h1>
        <button onClick={this.counter}>Random Number</button>     
      </div>
    )
  }
}

export default Clicker;
