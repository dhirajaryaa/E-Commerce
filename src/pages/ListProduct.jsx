import React, { useContext } from "react";
import Product from "../components/Product";
import { Cart } from "../context/CartContext";

function ListProduct() {
    const {state} = useContext(Cart);
    // console.log(state);
  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
      </div>
    </section>
  );
}

export default ListProduct;
