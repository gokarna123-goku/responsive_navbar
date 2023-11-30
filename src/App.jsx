import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar2 from "./Components/Header/Navbar2";
import Navbar3 from "./Components/Header/Navbar3";
import Navbar4 from "./Components/Header/Navbar4";
import Navbar5 from "./Components/Header/Navbar5";
import Glassmorphism from "./Components/Home/Glassmorphism";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-slate-950">
          <Header />
          <Home />
          <Navbar2 />
          <Navbar3 />
          <Navbar4 />
          <Navbar5 />
          <Glassmorphism />
        </div>
      </Router>
    </>
  );
}

export default App;
