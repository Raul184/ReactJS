import React , { useState } from 'react';
import './App.css';
//comps.
import ExpenseList from './components/Expenses/ExpenseList';
import ExpenseForm from './components/Expenses/ExpenseForm';
import Alert from './components/Layout/Alert';
// const uuid4 = require('uuid/v4');
import { contextState } from './components/Context/contextState';

function App() {
  const [ expenses , setExp ] = useState([
    { id: 1 , desc: "Rent" , amount: 1600 } 
  ]);
  return (
    <>
      <Alert />
      <h1>Monthly Budget</h1>
      <main className="App">
        <ExpenseForm add={setExp} expenses={expenses}/>
        <ExpenseList list={expenses} />
      </main>
      <h1>Total spending: {expenses.reduce( (acc , curr) => acc += parseInt(curr.amount) , 0)} $</h1>
    </>
  );
}

export default App;
