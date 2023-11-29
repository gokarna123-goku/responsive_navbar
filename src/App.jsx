import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-slate-950">
          <Header />
          <Home />
        </div>
      </Router>
    </>
  );
}

export default App;
