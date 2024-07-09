import { useContext } from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Cart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const {
    state: { products },dispatch
  } = useContext(Cart);
  const prodData = products.filter((item) => item.id == id);
  const { title, image, brand, description, price, rating } = prodData[0];
  const addToCart = (prod)=>{
    dispatch({ type: "SET_PRODUCTS_ON_CART", payload: prod });
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            className="lg:w-1/2 w-full lg:h-80 h-64 object-contain rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    {index < Math.floor(rating.rate) ? (
                      <FaStar />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                ))}

                <span className="text-rose-600 font-semibold ml-3">
                  {rating.count} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>

            <div className="flex mt-14">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {price}
              </span>
              <button onClick={()=>addToCart(prodData[0])} className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <FaHeart className="text-xl hover:text-rose-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
