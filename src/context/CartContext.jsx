import React, { createContext, useEffect, useReducer } from "react";
import { CartReducer } from "./CartReducer";
import { FilterReducer } from "./FilterReducer";


export const Cart = createContext();

function CartContext({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: [],
  });


  const [filteredState,filteredDispatch] = useReducer(FilterReducer,{
    rating: 0,
    searchQuery:"",
    brand:"",
  })

  function getProduct() {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => dispatch({ type: "SET_PRODUCTS", payload: json }))
      .catch((err) => alert(err));
  }
  
  useEffect(() => {
    getProduct();
  }, []);


  return <Cart.Provider value={{ state, dispatch,filteredState,filteredDispatch}}>{children}</Cart.Provider>;
}
export default CartContext;
