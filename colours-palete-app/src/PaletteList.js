import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const {palette} = this.props;
    return (
      <div className="PaletteList">
        
        {palette.map( p => 
          <Link to={`/palette/${p.id}`}><h1>{p.paletteName}</h1></Link> )
        }
      </div>
    )
  }
}
