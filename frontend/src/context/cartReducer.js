import produce from 'immer'
const storageCartItems = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        draft.cartItems.push({...action.payload, quantity: 1})
        storageCartItems(draft.cartItems)
      })
    case 'INCREASE':
      return produce(state, draft => {
        draft.cartItems[action.payload].quantity++
        storageCartItems(state.cartItems)
      })
    case 'REMOVE_PRODUCT':
      return produce(state, draft => {
        draft.cartItems.splice(action.payload, 1)
        storageCartItems(draft.cartItems)
      })
    case 'DECREASE':
      return produce(state, draft => {
        draft.cartItems[action.payload].quantity--
        if (draft.cartItems[action.payload].quantity === 0) {
          draft.cartItems.splice(action.payload, 1)
        }
        storageCartItems(draft.cartItems)
      })
    default:
      return state
  }
}
