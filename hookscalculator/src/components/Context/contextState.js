import React , { createContext } from 'react'



const context = createContext();

const contextState = () => {
  return (
    <context.Provider></context.Provider>
  )
}

export {context , contextState} ;