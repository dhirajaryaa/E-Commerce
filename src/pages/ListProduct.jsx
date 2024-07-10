import React, { useContext } from "react";
import Product from "../components/Product";
import { Cart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Filters from "../components/Filters";

function ListProduct() {
  const navigate = useNavigate();
  const {
    state: { products },
    dispatch,
    filteredState: { rating, brand, sort, searchQuery },
  } = useContext(Cart);

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (brand === "all brands") {
      sortedProducts = sortedProducts;
    } else {
      sortedProducts = sortedProducts.filter((item) => item.category === brand);
    }
    if (rating) {
      sortedProducts = sortedProducts.filter(
        (item) => Math.floor(item.rating.rate) === rating
      );
    }
    if (searchQuery) {
      if (searchQuery.length === 0) {
        sortedProducts = sortedProducts;
      }
      sortedProducts = sortedProducts.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return sortedProducts;
  };

  const addToCart = (prod) => {
    dispatch({ type: "SET_PRODUCTS_ON_CART", payload: prod });
  };

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="text-black body-font">
      <div className="container py-10 mx-auto px-8 sm:px-24 md:px-4 flex flex-col items-center">
        <Filters />
        <div className="flex flex-wrap gap-6 w-72 sm:w-full justify-center">
          {transformProducts().length != 0 ? (
            transformProducts().map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                viewProduct={viewProduct}
              />
            ))
          ) : (
            <h2 className="text-slate-800 text-2xl text-center">
              No Product match!
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default ListProduct;
