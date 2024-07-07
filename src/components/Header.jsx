import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/cart")
  }

  return (
    <header className="text-white bg-blue-500 h-16 ">
      <nav className="container flex justify-between items-center  h-16 mx-auto">
        <div className="brand">
          <Link
            to="/"
            className="text-xl md:text-2xl font-semibold hover:text-gray-200"
          >
            E-Commerce
          </Link>
        </div>
        <div className="search w-52 md:w-96">
          <input
            type="text"
            className=" text-sm md:text-lg rounded-md py-[4px] px-3 text-gray-800 font-normal w-full"
            placeholder="Search Product..."
          />

          <FaSearch className="mx-2 hidden"/>
        </div>
        <button className="cart p-2 relative"  onClick={handleNavigate}>
          <span className="py-[3px] px-[6px] rounded-full bg-red-600 font-bold absolute md:left-10 md:bottom-5 left-8 bottom-4 text-sm ">
            10
          </span>
          <FaShoppingCart className="md:text-3xl text-2xl" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
