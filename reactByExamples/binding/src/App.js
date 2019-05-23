import React from 'react';
import './App.css';
import ButtonList from './ButtonList';
import NumberList from './NumberList';

function App() {
  return (
    <div className="App">
      <p>BINDING WITH ARGUMENTS</p>
      <ButtonList />
      <p>PASSING METHODS TO CHILD COMPONENTS</p>
      <NumberList />
    </div>
  );
}

export default App;
