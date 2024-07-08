import React from "react";
import Product from "../components/Product";

function ListProduct() {
  return (
    <section class="text-black body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">

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
