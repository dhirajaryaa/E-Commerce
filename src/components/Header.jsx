import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cart");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    console.log("clied");
  };

  return (
    <header className="text-white bg-blue-500 h-16 sticky top-0 left-0 sm:px-0 px-10">
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

          <button className="cart p-2 relative" onClick={handleNavigate}>
            <span className="py-[3px] px-[6px] rounded-full bg-red-600 font-bold absolute md:left-7 md:bottom-5 left-6 bottom-4 text-sm ">
              10
            </span>
            <FaShoppingCart className="md:text-2xl text-[1.4rem]" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
