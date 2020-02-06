import React , { createContext , useState , useEffect } from 'react';
import axios from 'axios';


export const productsContext = createContext();

export const ProductsProvider = ({children}) => {
  const [ state , setState ] = useState({
    loading: false ,
    products: [] ,
    featured: []
  });
  const { loading , products , featured } = state;

  useEffect(() => {
    // Goes to True
    setState({ ...state , loading: true })
    axios.get('https://johnsmilgatutorials.com/projects/react-tech-store-v2/products')
    .then( 
      el => setState({ 
        ...state , 
        products: el.data , 
        loading: false ,
        featured: el.data.filter(el => el.featured === true )
      })
    ) 
  }, //eslint-disable-next-line 
  [])
  
  return (
    <productsContext.Provider value={{
      products ,
      loading ,
      featured
    }}>
      {children}
    </productsContext.Provider>
  )
}
