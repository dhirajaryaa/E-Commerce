import React, { useContext } from "react";
import Product from "../components/Product";
import { Cart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Filters from "../components/Filters";

function ListProduct() {
  const navigate = useNavigate();

  const {
    state: { products},
    dispatch,
  } = useContext(Cart);

  const addToCart = (prod) => {
    dispatch({ type: "SET_PRODUCTS_ON_CART", payload: prod });
  };

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="text-black body-font">
      <div className="container py-10 mx-auto px-8 sm:px-24 md:px-4">
      <Filters />
        <div className="flex flex-wrap gap-6 justify-evenly md:justify-between">
          {products &&
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                viewProduct={viewProduct}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ListProduct;
