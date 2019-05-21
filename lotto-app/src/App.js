import React from 'react';
import './App.css';
import Lotto from './Lotto.js';

function App() {
  return (
    <div className="App">
      <Lotto />
      <Lotto title="La Quiniela"  numBalls={2} maxNum={100} />
      <Lotto title="La Bonolot" numBalls={4} maxNum={50} />
    </div>
  );
}

export default App;
