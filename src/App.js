import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type,
      mode: mode,
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
      <div className="container">
       <Router>
      <Navbar title="TextWorks" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <Routes>
        <Route path="/about" element={<About/>}>
        </Route>
        
        <Route path="/" element={<Textform heading="Enter your text here:" mode={mode} showAlert={showAlert}/>}>
        </Route>
      </Routes>
      </Router>
      </div>
  );
}

export default App;
