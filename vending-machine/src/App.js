import React from 'react';
import './App.css';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import {Route , Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
    {/* ROUTES DEFINED */}
      <Switch>
        <Route exact path="/" render={() => <VendingMachine /> }/>
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
      </Switch>
    </div>
  );
}

export default App;
