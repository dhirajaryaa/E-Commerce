import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { Cart } from "../context/CartContext";

function CartPage() {
  const {
    state: { cart },
  } = useContext(Cart);
  return (
    <>
      <div className="bg-gray-100 py-14">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart?.map((prod) => {
              return <CartItem product={prod} key={prod.id} />;
            })}
          </div>
          <CartTotal />
        </div>
      </div>
    </>
  );
}

export default CartPage;
