import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#010814";
      // showAlert("dark mode enabled","Success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode enabled","Success")
    }
  };

  return (
    <>
      <Navbar title="TextWorks" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
    <Textform heading="Enter your text here:" mode={mode} showAlert={showAlert}/>
      
    </>
  );
}

export default App;
