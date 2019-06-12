import React from 'react';
import './App.css';
import Palette from './Palette';
//default colors Palette for home page
import seedColors from './seedColors';
//colors generator
import {generatePalette} from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[1]))
  return (
    <div className="App">
      <Palette allColors ={seedColors[8]}/>      
    </div>
  );
}

export default App;
