import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
import { Context } from '../context/contextState'

const ExpenseList = () => {
  const { expenses , clearExp } = useContext(Context);
  return (
    <>
      <ul className="list">
      { expenses.map( el => ( <ExpenseItem key={el.id} item={el} />))}
      </ul>
      { expenses.length > 0 && (
        <button className="btn" onClick={() => clearExp() }>
          Clear Expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  )
}

export default ExpenseList;