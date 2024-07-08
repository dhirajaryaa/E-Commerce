export function CartReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state,
         products: action.payload, };
      
    case "SET_PRODUCTS_ON_CART":
      return { ...state,
        cart: [...state.cart,action.payload]};
      
    default:
      return state;
  }
}
