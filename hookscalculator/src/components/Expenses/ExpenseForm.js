import React , { useContext } from 'react'
import { MdSend } from 'react-icons/md'
import { Context } from '../context/contextState'


const ExpenseForm = () => {
  const { 
    amount , 
    desc , 
    handleAmount , 
    handleDesc , 
    handleSubmit , 
    edit } = useContext(Context)
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="desc">charge</label>
          <input 
            type="text" 
            className="form-control" 
            name="desc" 
            placeholder="bills.."
            value={desc}
            onChange={handleDesc}
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
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Edit" : "Submit"}
        <MdSend className="btn-icon"/>
      </button>
    </form>
  )
}

export default ExpenseForm;