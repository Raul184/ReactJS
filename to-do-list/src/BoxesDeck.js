import React, { Component } from 'react'
import './BoxesDeck.css'
import Box from './Box';
import BoxForm from './BoxForm';

export default class BoxesDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { height: "100px", width: "100px", backgroundColor: "Orange"}
      ] 
    }
    this.create = this.create.bind(this);
  }
  create(nueBox){
    this.setState({
      boxes: [...this.state.boxes, nueBox] 
    });
  }
  render() {
    const boxes = this.state.boxes.map( box => (
      <Box styles={box} />
    ));
    return (
      <div className="BoxesDeck">
        <BoxForm createBox={this.create} />
        {/* COLOR BOXES */}
        {boxes}
      </div>
    )
  }
}
