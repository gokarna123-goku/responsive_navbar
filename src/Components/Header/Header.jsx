import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="w-full h-auto p-4 bg-slate-950">
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">Logo</div>
            <div className="hidden md:flex space-x-4">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
            </div>
          </div>

          {/* <div className="md:hidden">
            {isMenuOpen ? (
              <FaTimes onClick={toggleMenu} size={24} />
            ) : (
              <FaBars onClick={toggleMenu} size={24} />
            )}
          </div> */}

          {/* <div
            className={`md:flex ${
              isMenuOpen ? "flex flex-col mt-4" : "hidden"
            }`}
          >
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
          </div> */}

          <div className="md:flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
