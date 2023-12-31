import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full h-auto lg:px-24 md:px-16 sm:px-14 px-12 py-2 bg-slate-800 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Logo section */}
              <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]">
                Navbar
              </Link>
              {/* Toggle Button section */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Navbar menu link section */}
          <div>
            <div
              className={`flex-1 justify-self-center md:block ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
                <li>
                  <Link className="text-[1.15rem] font-medium tracking-wider text-gray-200 ease-out duration-700">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-[1.15rem] font-medium tracking-wider text-gray-400 hover:hover:text-gray-200 ease-out duration-700">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-[1.15rem] font-medium tracking-wider text-gray-400 hover:hover:text-gray-200 ease-out duration-700">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-[1.15rem] font-medium tracking-wider text-gray-400 hover:hover:text-gray-200 ease-out duration-700">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="text-[1.15rem] font-medium tracking-wider text-gray-400 hover:hover:text-gray-200 ease-out duration-700">
                    Contact
                  </Link>
                </li>
                <li className="lg:ml-10 md:ml-6 sm:ml-6 ml-3">
                  <button className="bg-orange-500 text-[1.1rem] font-normal text-white px-5 py-1.5 rounded">
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
