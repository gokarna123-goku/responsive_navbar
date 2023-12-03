import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full h-auto px-16 py-6 bg-slate-800 shadow-md">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/)">
                <h2 className="text-2xl font-bold text-white">LOGO</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
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

              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <a
                  href="/)"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign in
                </a>
                <a
                  href="/)"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <a
              href="/)"
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Sign in
            </a>
            <a
              href="/)"
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
