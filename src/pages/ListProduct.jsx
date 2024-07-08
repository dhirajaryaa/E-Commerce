import React, { useContext } from "react";
import Product from "../components/Product";
import { Cart } from "../context/CartContext";

function ListProduct() {
  const {
    state: { products,cart }
  } = useContext(Cart);

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap gap-6 justify-center">
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} cart={cart}/>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ListProduct;
