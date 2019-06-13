import React, { Component } from 'react'
import ColorBox from './ColorBox';
//slider
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

//key 
const uuidv4 = require('uuid/v4');


export default class Palette extends Component {
  constructor(props){
    super(props);
    this.state = {
      level : 500
    }
    this.changeLevel = this.changeLevel.bind(this);
  }
  //on Slider Change
  changeLevel(level){
    this.setState({level});
  }
  render() {
    const { colors } = this.props.generate
    //Colors per palette
    const palette = colors[this.state.level].map( color => (
      <ColorBox background={color.hex} name={color.name} />
    ))
    return (
      <div className="Palette">
        <div className="slider">
          <Slider defaultValue={this.state.level} min={100} max={900} step={100} onAfterChange={this.changeLevel}/>
        </div>
      {/* Navbar */}
        <div className="Palette-colors">
         {palette}
        </div>
      {/* Footer */}
      </div>
    )
  }
}
