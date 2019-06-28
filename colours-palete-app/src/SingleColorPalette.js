import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
//id
const uuidv4 = require('uuid/v4');

export default class SingleColorPalette extends Component {
  constructor(props){
    super(props);
    //instance way of doing it
    this._shades = this.gatherShades(this.props.palette , this.props.colorId);
    this.state = {
      format: "hex"
    }; 
    this.handleChange = this.handleChange.bind(this);
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
    return selectedOnes.slice(1);
  }
  // on SElecT handleChange
  handleChange(value) {
    this.setState({
      format: value
    })
  }
  render() {
    const {palette} = this.props;
    //state update
    const {format} = this.state;
    const colorBoxes = this._shades.map( 
      color => <ColorBox key={uuidv4()} name={color.name} background={color[format]} showLink={false}/>
    )
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.handleChange} gamasColor={false}/>
        <div className="Palette-colors">
          {colorBoxes}
          <div className="goBack ColorBox">
            <Link to={`/palette/${palette.id}`} className="backBtn">Go Back</Link>
          </div>
        </div>
        <Footer flagName={palette.name} emoji={palette.emoji} />
      </div>
    )
  }
}
