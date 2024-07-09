import React, { useContext } from "react";
import Product from "../components/Product";
import { Cart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ListProduct() {
  const navigate = useNavigate();

  const {
    state: { products, cart },
    dispatch,
  } = useContext(Cart);

  const addToCart = (prod) => {
    dispatch({ type: "SET_PRODUCTS_ON_CART", payload: prod });
  };

  const viewProduct = (id)=>{
    navigate(`/product/${id}`)
  }

  return (
    <section className="text-black body-font">
      <div className="container px-2 py-14 mx-auto">
        <div className="flex flex-wrap gap-6 justify-evenly">
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
