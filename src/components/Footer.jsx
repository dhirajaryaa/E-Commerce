import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white body-font bg-blue-500 shadow-lg text-center">
      <div className="container  py-3 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center justify-center text-white"
        >
          <span className="text-xl">E-Commerce</span>
        </Link>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 Tailblocks —
          <a
            href="https://twitter.com/dhriajaryaa"
            className="text-gray-200 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Dhiraj Arya
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
