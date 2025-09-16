import React, { useState } from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import "./App.css";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="container-fluid d-flex vh-100 p-4 justify-content-center align-items-center">
      <Home />
    </div>
  );
}

export default App;
 