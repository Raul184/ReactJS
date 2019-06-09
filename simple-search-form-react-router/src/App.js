import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import Food from './Food.js';
import Meal from './Meal.js';


function App() {
  return (
    <div className="App">
     <Switch>
       <Route
        exact
        path="/food/:name"
        render={ routeProps => <Food {...routeProps}/> }
       />
       <Route
        exact
        path="/food/:foodName/drink/:drinkName"
        component={ Meal }
       />
     </Switch>
    </div>
  );
}

export default App;
