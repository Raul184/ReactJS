import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';
//key 
const uuidv4 = require('uuid/v4');

export default class Palette extends Component {
  render() {
    //Colors per palette
    const palette = this.props.allColors.colors.map( color => (
      <ColorBox background={color.color} name={color.name} />
    ))
    return (
      <div className="Palette">
      {/* Navbar */}
        <div className="Palette-colors">
         {palette}
        </div>
      {/* Footer */}
      </div>
    )
  }
}
