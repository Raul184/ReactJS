// helper functions
export const getLocalStorage = () => {
  return localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart'))
    :
    []
}

 