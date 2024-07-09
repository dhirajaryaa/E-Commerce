import React from "react";
import { FaTrash } from "react-icons/fa";

function CartItem({ product, handleQty ,handleDelate}) {
  return (
    <div className="justify-between mb-6 rounded-lg border-gray-300 border-2 p-6 shadow-xl sm:flex sm:justify-start">
      <img
        src={product.image}
        alt="product-image"
        className="w-full rounded-lg sm:w-14 object-contain h-32 sm:h-auto"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
          <p className="mt-1 text-xs text-cyan-600 font-semibold">
            {product.category}
          </p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-2">
          <div className="flex items-center border-gray-300 font-bold">
            <button
              onClick={() => handleQty(product, "DEC")}
              className="cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              -
            </button>
            <p className="w-14 h-8 bg-gray-300 text-black flex items-center justify-center focus:outline-none">
              {product.qty}
            </p>
            <button
              onClick={() => handleQty(product, "INC")}
              className="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              +
            </button>
          </div>
          <div className="flex items-center justify-between w-28">
            <p className="text-xl text-blue-700 font-semibold">
              $ {product.price}
            </p>
            <button onClick={()=>handleDelate(product.id)}>
              <FaTrash className="text-rose-600 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
