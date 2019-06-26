import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import Footer from "./Footer";
//id
const uuidv4 = require('uuid/v4');

export default class SingleColorPalette extends Component {
  constructor(props){
    super(props);
    //instance way of doing it
    this._shades = this.gatherShades(this.props.palette , this.props.colorId);
    console.log(this._shades);
  }
  //helper
  gatherShades(palette, colorF){ 
    let selectedOnes = [];
    let allC = palette.colors;
    for (let key in allC){
      selectedOnes = selectedOnes.concat(
        allC[key].filter( color => color.id === colorF)
      );
    }
    return selectedOnes;
  }
  render() {
    const {emoji, name} = this.props;
    const colorBoxes = this._shades.map( 
      color => <ColorBox key={uuidv4()} name={color.name} background={color.hex} showLink={false}/>
    )
    return (
      <div className="Palette">
        <h1>TOMATE</h1>
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer flagName={name} emoji={emoji} />
      </div>
    )
  }
}
