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
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextWorks" mode={mode} toggleMode={toggleMode} />
      
    <Textform heading="Enter your text here:" mode={mode} />
      
    </>
  );
}

export default App;
