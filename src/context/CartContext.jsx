import React, { createContext, useEffect, useReducer, useState } from 'react'

export const Cart = createContext();

function CartContext({children}) {
    const [products,setProducts] = useState([]);

    async function getProduct(){
        try {
            const res = await fetch(`https://fakestoreapi.com/products`);
            const json = await res.json();
            setProducts((prev) => [...prev, ...json]);
        } catch (err) {
            alert(err);
        }
    }
    

    useEffect(()=>{
        getProduct();
    },[])

    const [state,dispatch] = useReducer(CartContext,{
        products:products,
        cart:[]
    })


  return (
    <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
  )
}
export default CartContext