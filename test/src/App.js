import React from 'react';
import './App.css';
// ROUTE
import { Route, Switch } from "react-router-dom";
// COMPONENTS
import MenuNav from "./MenuNav";
import PestaI from "./PestaI";
import PestaII from "./PestaII";


function App() {
  return (
    <div className="App">
      <Switch>
      {/* HOME */}
        <Route exact path='/' render={ () => <MenuNav />} />
      {/* TAB 1 */}
        <Route exact path='/pestaI' 
          render={() => (
            <div> 
                        <MenuNav />
                        <PestaI />
            </div>
          )} 
        />
      {/* TAB 2 */}
        <Route exact path='/pestaII' 
          render={() => (
          <div>
            <MenuNav />
            <PestaII />
          </div>
        )} 
        />
      </Switch>
    </div>
  );
}

export default App;
