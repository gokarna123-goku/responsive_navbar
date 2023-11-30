import React from "react";
import "./Glassmorphism.css";

const Glassmorphism = () => {
  return (
    <>
      <div className="w-full h-auto my-10 py-64 glassmorphism flex items-center justify-center">
        <div className="bg-slate-950 rounded-md w-full mx-16 p-40 bg-opacity-60 backdrop-filter backdrop-blur-sm text-4xl text-gray-100 font-black">
          This is Glassmorphism design.
        </div>
      </div>
    </>
  );
};

export default Glassmorphism;
