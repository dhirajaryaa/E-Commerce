import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { Cart } from "../context/CartContext";

function CartPage() {
  const {
    state: { cart },
    dispatch,
  } = useContext(Cart);

  const handleQty = (prod, btn) => {
    if (btn === "DEC") {
      dispatch({ type: "DEC_QTY_ON_CART", payload: prod });
    }
    if (btn === "INC") {
      dispatch({ type: "INC_QTY_ON_CART", payload: prod });
    }
  };

  const handleDelate = (id) => {
    dispatch({ type: "DEL_ON_CART", payload: id });
  };

  return (
    <>
      <div className="bg-gray-100 py-14">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.length != 0 ? (
              cart?.map((prod) => {
                return (
                  <CartItem
                    product={prod}
                    key={prod.id}
                    handleQty={handleQty}
                    handleDelate={handleDelate}
                  />
                );
              })
            ) : (
              <h2 className="text-slate-800 text-2xl text-center">
                No Item in Cart
              </h2>
            )}
          </div>
          <CartTotal product={cart}/>
        </div>
      </div>
    </>
  );
}

export default CartPage;
