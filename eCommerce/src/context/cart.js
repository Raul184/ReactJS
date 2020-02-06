// cart context
import React , { createContext , useState } from 'react'
//utils
import localCart from '../utils/localCart';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [state, setState] = useState({
    cart: localCart ,
    total: 0 ,
    cartItems: 0
  })
  const { cart , total , cartItems } = state;
  return <CartContext.Provider value={{
    cart ,
    total ,
    cartItems
  }}>
    {children}    
    </CartContext.Provider>
}


