import React, { Component } from 'react'
import './BoxContainer.css';
import Box from './Box';

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: ['purple', 'magenta', 'violet', 'pink', 'yellow', 'red', 'green', 'lightblue', 'white', 'blue' ]
  }
  render() {
    //Previously determined arr making
    const boxes = Array.from({length : this.props.numBoxes}).map(
      () => <Box allColors={this.props.allColors}/>
    )
    return (
      <div className="BoxContainer">{boxes}</div>
    )
  }
}
