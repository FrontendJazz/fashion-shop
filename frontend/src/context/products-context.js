import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
// create context

export const ProductsContext = createContext()

// Provider component

export const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios('/api/v1/dresses').then(({data}) => setProducts(data))
  }, [])

  return (<ProductsContext.Provider value={{products}}>
    {children}
  </ProductsContext.Provider>)
}
