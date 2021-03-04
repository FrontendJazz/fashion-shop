import React, {createContext, useReducer} from 'react'
import {cartReducer} from "./cartReducer";

export const CartContext = createContext()

const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
}

export const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const addToCart = (product) => dispatch({type: 'ADD_TO_CART', payload: product})
  const increase = (idx) => dispatch({type: 'INCREASE', payload: idx})
  const decrease = (idx) => dispatch({type: 'DECREASE', payload: idx})
  const removeItem = (idx) => dispatch({type: 'REMOVE_PRODUCT', payload: idx})
  const contextValues = {
    ...state,
    addToCart,
    increase,
    decrease,
    removeItem
  }
  return (<CartContext.Provider value={contextValues}>
    {children}
  </CartContext.Provider>)
}
