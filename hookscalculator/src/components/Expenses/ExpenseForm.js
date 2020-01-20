import React , { useState } from 'react'
import { MdSend } from 'react-icons/md'

const ExpenseForm = ({ add , expenses}) => {
  const [ data , setData ] = useState({
    desc: '' , 
    amount: ''
  })
  const { desc , amount } = data;

  const handleSubmit = e => {
    e.preventDefault()
    if( desc.length > 0 && amount > 0){

    }
    else {
      //alert
    }
  }
  const handleChange = e => {
    setData({
      ...data , 
      [e.target.name] : e.target.value 
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input 
            type="text" 
            className="form-control" 
            name="desc" 
            placeholder="bills.."
            value={desc}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input 
            type="number" 
            className="form-control" 
            name="amount" 
            placeholder="amount"
            value={amount}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Submit
        <MdSend className="btn-icon"/>
      </button>
    </form>
  )
}

export default ExpenseForm;