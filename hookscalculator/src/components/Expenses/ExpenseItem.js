import React, { useContext } from 'react'
import { MdDelete , MdEdit } from 'react-icons/md'
import { Context } from '../context/contextState'

const ExpenseItem = ({item}) => {
  const { id , desc , amount } = item
  const { removeExp , editExp } = useContext(Context) 
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{desc}</span>
        <span className="amount">$ {amount}</span>
      </div>
      <div className="icons">
        <button 
          className="edit-btn" 
          aria-label="edit button"
          onClick={() => editExp(id)}
        >
          <MdEdit />
        </button>
        <button 
          className="clear-btn" 
          aria-label="delete button"
          onClick={() => removeExp(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem;