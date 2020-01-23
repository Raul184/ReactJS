import React , { useContext , useEffect }  from 'react';
import './App.css';
//comps.
import ExpenseList from './components/Expenses/ExpenseList';
import ExpenseForm from './components/Expenses/ExpenseForm';
import Total from './components/Layout/Total';
import Alert from './components/Layout/Alert';
import { Context } from './components/context/contextState'

function App() {
  const { alert , expenses } = useContext(Context)
  useEffect(() => {
    localStorage.setItem('expenses' , JSON.stringify(expenses))
  }, [expenses])
  return (
    <>
      { alert.show && <Alert type={alert.type} text={alert.text} /> }
      <h1>Monthly Budget</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList />
        <Total />
      </main>
    </>
  );
}

export default App;
