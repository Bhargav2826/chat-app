import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import "./App.css";
import Home from "./pages/home/Home";
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext";


function App() {
  const {authUser}= useAuthContext();
  console.log(authUser)
  return (
    <div className="container-fluid d-flex vh-100 p-4 justify-content-center align-items-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ?  <Navigate to ="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to ="/" /> : <SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  );
} 

export default App;
 