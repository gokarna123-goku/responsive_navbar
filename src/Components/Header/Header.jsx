import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-auto px-16 py-8 bg-slate-900">
        <div className="w-full h-auto flex items-center gap-10">
          <div className="logo_section">
            <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]">Navbar</Link>
          </div>
          <div className="w-full flex items-center justify-between">
            <ul className="list-none flex items-center gap-5">
              <li>
                <Link className="text-[1.1rem] text-gray-400 hover:text-gray-200 ease-out duration-700">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-[1.1rem] text-gray-400 hover:text-gray-200 ease-out duration-700">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-[1.1rem] text-gray-400 hover:text-gray-200 ease-out duration-700">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-[1.1rem] text-gray-400 hover:text-gray-200 ease-out duration-700">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-[1.1rem] text-gray-400 hover:text-gray-200 ease-out duration-700">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="bg-blue-500 text-base text-white px-6 py-2 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
