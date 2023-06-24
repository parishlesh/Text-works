import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#010814";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
    }
  };

  return (
    <>
      <Navbar title="TextWorks" mode={mode} toggleMode={toggleMode} />
      <div className="container my 3"  >
        <Textform heading="Enter your text here:" mode={mode} />
      </div>
    </>
  );
}

export default App;
