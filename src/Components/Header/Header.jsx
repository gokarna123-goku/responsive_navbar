import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-auto p-4 bg-slate-950">
        <div className="w-full h-auto flex items-center">
          <div className="logo_section">
            <Link className="text-2xl text-orange-500">Logo</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
