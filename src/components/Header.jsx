import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import CartBtn from "./CartBtn";
import { Cart } from "../context/CartContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    filteredState: { searchQuery},
    filteredDispatch,
  } = useContext(Cart);
  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white bg-blue-500 h-16 sticky top-0 left-0 sm:px-0 px-10 z-50">
      <nav className="container flex justify-between items-center  h-16 mx-auto">
        <div className="brand">
          <Link
            to="/"
            className="text-xl md:text-2xl font-semibold hover:text-gray-200"
          >
            E-Commerce
          </Link>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } search w-52 md:w-96 sm:block absolute top-[4.2rem]  sm:top-0 left-0 sm:left-0 sm:relative`}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e)=>filteredDispatch({type:"FILTER_BY_SEARCH",payload:e.target.value})}
            placeholder="Search Product..."
            className="bg-blue-400 sm:bg-white sm:text-gray-600  w-screen sm:w-full rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-white placeholder:text-white sm:placeholder:text-gray-600"
          />
        </div>
        <div className="relative flex justify-between items-center">
          <button
            onClick={toggleSearch}
            className="md:mr-4 mr-2 block sm:hidden"
          >
            <FaSearch className="md:text-2xl text-[1.4rem]" />
          </button>

          <CartBtn />
        </div>
      </nav>
    </header>
  );
}

export default Header;
