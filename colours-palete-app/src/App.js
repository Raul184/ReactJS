import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
//default colors Palette for home page
import seedColors from './seedColors';
//colors generator
import {generatePalette} from "./colorHelpers";
//ROUTER
import { Route , Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
//Single Color Component
import SingleColorPalette from "./SingleColorPalette";

//id
const uuidv4 = require('uuid/v4');

export default class App extends Component {
  findPalette(id){
    return seedColors.find( function(palette){
      return palette.id === id;
    });
  }
  render(){
  return (
    <Switch>
      {/* HOME */}
      <Route exact path='/' render={ (routeProps) => <PaletteList palette={seedColors} {...routeProps}/> } />

      {/* Create a new Palete */}
      <Route exact path="/palette/newPalette"
        render={() => <h1>Hello</h1>}
      />

      {/* Color Palette */}
      <Route exact path="/palette/:id" render={
        (routeProps) =>  
          <div className="App">
            <Palette generate={generatePalette(this.findPalette(routeProps.match.params.id))}/>
          </div>                   
        }  
      />
      {/* Single Color Palette */}
      <Route exact path="/palette/:paletteId/:colorId" 
             render={(routeProps) => 
        <SingleColorPalette
          palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
          colorId={routeProps.match.params.colorId} 
        />}
      />
    </Switch>
  )};
}

