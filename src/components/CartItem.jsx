import React from "react";
import { FaTrash } from "react-icons/fa";


function CartItem({ product }) {
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
          <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-2">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
        -
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              value="2"
              min="1"
            />
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
             +
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm w-10">{product.price} $</p>
           <button>
           <FaTrash />
           </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
