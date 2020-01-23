import React, { createContext , useState } from 'react';
import uuid from 'uuid'
export const Context = createContext();

export default function Provider(props) {

	const [ expenses , setExpenses ] = useState( 
		JSON.parse(localStorage.getItem('expenses')) || [] 
	)
	// FORM   
	const [ desc , setDesc ] = useState('')
	const [ amount , setAmount ] = useState('')
	//UI 
	const handleDesc = e => setDesc(e.target.value)
	const handleAmount = e => setAmount(e.target.value)
	
	// Alerts 
	const [ alert , setAlert ] = useState({ 
		show: false ,
		type: '' ,
		text: ''
	})
	// EDIT 
	const [ edit , setEdit ] = useState(false);
	const [ editId , setId ] = useState(0);

	// Remove Expenses from the list
	const removeExp = id => { 
		setExpenses( expenses.filter( el => el.id !== id ))
		setDesc('')
		setAmount('')
	}
	// Clear Expenses from the list
	const clearExp = () => setExpenses([])
	
	// Edit Expenses
	const editExp = id => {
		let expense = expenses.find(item => item.id === id)
		const { desc , amount } = expense
		setDesc(desc) 
		setAmount(amount)
		setEdit(true)
		setId(id)
	}

	const handleSubmit = e => {
    e.preventDefault()
    if( desc.length > 0 && amount > 0){
			if(edit){
				let edittedExp = expenses.map(el => {  
					return el.id === editId ?  
						{ ...el , desc , amount }
						: 
						el 
				})
				setExpenses(edittedExp)
				setEdit(false)
				setAlert({ show: true , type: 'success' , text: 'Updated'})
				setTimeout(() => setAlert({ ...alert , show: false }), 1000 )
				localStorage.setItem()
			} 
			else {
				setExpenses([ ...expenses , { id: uuid() , desc , amount} ])
			}
			//clear UI
			setDesc('')
			setAmount('')
    }
    else {
			setAlert({ 
				show: true ,
				type: 'danger' ,
				text: 'Please , complete both fields'
			})
			setTimeout(() => setAlert({ ...alert , show: false }), 1000)
		}
	}
	return (
		<Context.Provider value={{
			expenses ,
			desc ,
			amount ,
			handleDesc ,
			handleAmount ,
			alert ,
			edit ,
			clearExp ,
			removeExp ,
			editExp ,
			handleSubmit
		}}>
			{props.children}
		</Context.Provider>
	)
}
