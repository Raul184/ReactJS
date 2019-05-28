import React, { Component } from 'react'
import './BoxesDeck.css'
import Box from './Box';
import BoxForm from './BoxForm';

export default class BoxesDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.create = this.create.bind(this);
  }
  // CREATE NEW BOX
  create(nueBox){
    this.setState({
      boxes: [...this.state.boxes, nueBox] 
    });
  }
  // REMOVE 1 BOX
  remove(id){
    this.setState({
      boxes: this.state.boxes.filter( box => box.id !== id)
    })
  }
  render() { 
    const boxes = this.state.boxes.map( box => (
      <Box 
        key={box.id} 
        id={box.id}
        width={box.width} 
        height={box.height} 
        color={box.color}
        remove={() => this.remove(box.id)}
        />
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
