const initialState = {
  cartList: [],
}

const UPDATE_CART = 'UPDATE_CART';

export function updateCart(list) {
  return {
    type: UPDATE_CART,
    payload: list
  }
}


export default function cartReducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cartList: action.payload
      }
    default: return state;  
  }    
}