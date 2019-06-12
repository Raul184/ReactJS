import React from 'react';
import './App.css';
import Palette from './Palette';
//default colors Palette for home page
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Palette allColors ={seedColors[8]}/>      
    </div>
  );
}

export default App;
