import React  from 'react';
import './App.css';
//comps.
import ExpenseList from './components/Expenses/ExpenseList';
import ExpenseForm from './components/Expenses/ExpenseForm';
import Total from './components/Layout/Total';
import Alert from './components/Layout/Alert';
// const uuid4 = require('uuid/v4');
import Provider from './components/context/contextState'


function App() {
  return (
    <>
    <Provider>
      <Alert />
      <h1>Monthly Budget</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList />
        <Total />
      </main>
    </Provider>
    </>
  );
}

export default App;
