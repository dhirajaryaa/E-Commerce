import React, { createContext, useEffect, useReducer } from "react";
import { CartReducer } from "./CartReducer";


export const Cart = createContext();

function CartContext({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: [],
  });

  function getProduct() {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => dispatch({ type: "SET_PRODUCTS", payload: json }))
      .catch((err) => alert(err));
  }
  
  useEffect(() => {
    getProduct();
  }, []);


  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}
export default CartContext;
