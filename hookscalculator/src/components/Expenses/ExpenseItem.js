import React from 'react'
import { MdDelete , MdEdit } from 'react-icons/md'


const ExpenseItem = ({item}) => {
  const { desc , amount } = item
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{desc}</span>
        <span className="amount">$ {amount}</span>
      </div>
      <div className="icons">
        <button className="edit-btn" aria-label="edit button">
          <MdEdit />
        </button>
        <button className="clear-btn" aria-label="delete button">
          <MdDelete />
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem;