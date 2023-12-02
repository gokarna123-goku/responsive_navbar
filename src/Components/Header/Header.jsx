import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="w-full h-auto px-16 py-6 bg-slate-800 shadow-md">
        <div
          className={`w-full h-auto lg:flex md:block sm:block block 
        ${isMenuOpen ? "block" : "hidden"} items-center gap-10`}
        >
          <div className="logo_section">
            <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]">
              Navbar
            </Link>
          </div>
          <div className="w-full lg:flex md:block sm:block block items-center justify-between">
            <ul className="list-none lg:flex md:block sm:block block items-center gap-x-5 gap-y-16">
              <li>
                <Link className="text-[1.15rem] font-medium tracking-wide text-gray-400 hover:text-gray-200 ease-out duration-700">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-[1.15rem] font-medium tracking-wide text-gray-400 hover:text-gray-200 ease-out duration-700">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-[1.15rem] font-medium tracking-wide text-gray-400 hover:text-gray-200 ease-out duration-700">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-[1.15rem] font-medium tracking-wide text-gray-400 hover:text-gray-200 ease-out duration-700">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-[1.15rem] font-medium tracking-wide text-gray-400 hover:text-gray-200 ease-out duration-700">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="bg-blue-500 text-[1.1rem] font-normal text-white px-5 py-1.5 rounded">
              Login
            </button>
          </div>
          <div className="lg:hidden md:flex right-16 top-6 absolute">
            {isMenuOpen ? (
              <FaTimes
                className="text-gray-400 cursor-pointer"
                onClick={toggleMenu}
                size={24}
              />
            ) : (
              <FaBars
                className="text-gray-400 cursor-pointer"
                onClick={toggleMenu}
                size={24}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
