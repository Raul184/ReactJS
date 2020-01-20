import React from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'


const ExpenseList = ({ list }) => {
  const handleClick = () => {
    console.log('clicked');
  }
  return (
    <>
      <ul className="list">
      { list.map( el => ( <ExpenseItem key={el.id} item={el} />))}
      </ul>
      { list.length > 0 && (
        <button className="btn" onClick={handleClick}>
          Clear Expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  )
}

export default ExpenseList;