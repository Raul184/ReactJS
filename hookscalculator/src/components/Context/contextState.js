import React, { createContext , useState } from 'react';
import uuid from 'uuid'
export const Context = createContext();

export default function Provider(props) {
	const [ expenses , setExpenses ] = useState([
			{ id: uuid() , desc: "using goats", amount: 1400 } , 
			{ id: uuid() , desc: " the devil", amount: 1400 }
	])

	// Add Expenses
	const addExp = exp => setExpenses([ ...expenses , { id: uuid() , desc: exp.desc , amount: exp.amount} ])

	// Remove Expenses from the list
	const removeExp = id => ( 
		setExpenses( expenses.filter( el => el.id !== id ))
	)

	// Clear Expenses from the list
	const clearExp = () => setExpenses([])
	
	// Edit Expenses
	const editExp = () => console.log('editing');

	return (
		<Context.Provider value={{
			expenses ,
			clearExp ,
			removeExp ,
			editExp ,
			addExp
		}}>
			{props.children}
		</Context.Provider>
	)
}
