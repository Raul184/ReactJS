import React from 'react';
import './App.css';
import Lotto from './Lotto.js';

function App() {
  return (
    <div className="App">
      <Lotto title="La Quiniela"  numBalls={6} maxNum={40} />
      <Lotto title="La Bonolot" numBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
