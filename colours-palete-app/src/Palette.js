import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
//css
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
    const { colors, name, emoji, id } = this.props.generate
    const { level } = this.state;
    //Colors per palette
    const palette = colors[this.state.level].map( color => (
      <ColorBox 
        key={ uuidv4() } 
        color={color.id} 
        paletteId={id} 
        background={color[this.state.format]} 
        name={color.name} 
        showLink={true}  
      />
    ))
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.handleChange}/> 
        <div className="Palette-colors">
         {palette}
        </div>
        <Footer flagName={name} emoji={emoji}/>
      </div>
    )
  }
}
