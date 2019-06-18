import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
//default colors Palette for home page
import seedColors from './seedColors';
//colors generator
import {generatePalette} from "./colorHelpers";
//ROUTER
import { Route , Switch } from "react-router-dom";
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
      <Route exact path='/' render={ () => <h1>works</h1> } />
      <Route exact path="/palette/:id" render={
        (routeProps) =>  
          <div className="App">
            <Palette generate={generatePalette(this.findPalette(routeProps.match.params.id))}/>
          </div>                   
        }  
      />
    </Switch>
  )};
}

