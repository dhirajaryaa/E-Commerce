import React, { useContext } from "react";
import Product from "../components/Product";
import { Cart } from "../context/CartContext";

function ListProduct() {
  const {
    state: { products, cart },
    dispatch,
  } = useContext(Cart);

  const addToCart = (prod) => {
    let itPresent = false;
    cart.map((item) => {
      if (item.id === prod.id) {
        itPresent = true;
      }
    });
    if (itPresent) {
      alert("this item is already present in your cart");
      return;
    }
    const newProd = {...prod,qty:1}
    dispatch({ type: "SET_PRODUCTS_ON_CART", payload: newProd });
  };

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
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ListProduct;
