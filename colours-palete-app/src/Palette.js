import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
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
    //Shortcuts
    const { colors } = this.props.generate
    const { level } = this.state;
    //Colors per palette
    const palette = colors[this.state.level].map( color => (
      <ColorBox background={color.hex} name={color.name} />
    ))
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel}/> 
        <div className="Palette-colors">
         {palette}
        </div>
      {/* Footer */}
      </div>
    )
  }
}
