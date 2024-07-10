import React, { useContext} from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Cart } from "../context/CartContext";

function Filters() {
  const {
    filteredState: { rating, brand, searchQuery },
    filteredDispatch,
  } = useContext(Cart);

  return (
    <div className="w-full border-2 border-gray-300 py-2 rounded-xl mb-6 mx-auto px-2 sm:px-4 gap-2 flex items-center justify-between flex-col md:flex-row">
      <div className="flex items-center justify-between text-base font-semibold">
        Price:
        <label htmlFor="highToLow" className="h-6 ml-3">
          <input type="radio" name="sort_by" id="highToLow" /> Ascending
        </label>
        <label htmlFor="lowToHigh" className="h-6 ml-3">
          <input type="radio" name="sort_by" id="lowToHigh" /> Descending
        </label>
      </div>
      <div className="text-center">
        <select
          name="brand"
          id="brand"
          className="bg-gray-200 py-1 px-5 rounded-lg"
        >
          <option value="mans">Mans</option>
          <option value="womans" selected>
            Womans
          </option>
        </select>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="text-yellow-400 text-2xl"
            onClick={() => filteredDispatch({type:"FILTER_BY_RATING",payload:index+1})}
          >
            {index < rating ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </div>
      <div><button className="hover:bg-green-600 bg-green-500 text-white py-2 px-5 rounded-xl text-lg font-semibold">Clear Filter</button></div>
    </div>
  );
}

export default Filters;
