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
      level : 500,
      format: 'hex'
    }
    this.changeLevel = this.changeLevel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //on Slider Change
  changeLevel(level){
    this.setState({level});
  }

  // on SElecT handleChange
  handleChange(value){
    this.setState({
      format : value
    })
  }
  render() {
    //Shortcuts
    const { colors } = this.props.generate
    const { level } = this.state;
    //Colors per palette
    const palette = colors[this.state.level].map( color => (
      <ColorBox background={color[this.state.format]} name={color.name} />
    ))
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.handleChange}/> 
        <div className="Palette-colors">
         {palette}
        </div>
      {/* Footer */}
      </div>
    )
  }
}
