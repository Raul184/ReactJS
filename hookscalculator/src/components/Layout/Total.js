import React, { useContext } from 'react';
import { Context } from '../context/contextState'

const Total = () => {
  const consumer = useContext(Context);
  return (
    <h1>Total spending: {consumer.expenses.reduce( (acc , curr) => acc += parseInt(curr.amount) , 0)} $ </h1>
  )
}

export default Total;