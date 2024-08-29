import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether the dark mode is enabled or not
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode(`dark`);
      document.body.style.backgroundColor = `#042743`;
      showAlert("dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils Now";
      // }, 1500);
    } else {
      setmode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };
  return (
    <>
      {" "}
      {/* <Navbar title="Textutils2" homeText="home us" /> */}{" "}
      {/* <Navbar /> */}{" "}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />{" "}
        <Alert alert={alert} />{" "}
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />{" "}
            </Route>{" "}
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />{" "}
            </Route>{" "}
          </Switch>{" "}
        </div>{" "}
      </Router>{" "}
    </>
  );
}
export default App;
