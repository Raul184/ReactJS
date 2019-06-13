import React from 'react';
import './App.css';
import Palette from './Palette';
//default colors Palette for home page
import seedColors from './seedColors';
//colors generator
import {generatePalette} from "./colorHelpers";
//id
const uuidv4 = require('uuid/v4');

function App() {
  return (
    <div className="App">
      <Palette generate ={generatePalette(seedColors[4])}/>      
    </div>
  );
}

export default App;
