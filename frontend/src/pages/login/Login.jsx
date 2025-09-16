import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div
        className="w-100 p-4 rounded shadow mx-3"
        style={{
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.15)", // translucent white
          backdropFilter: "blur(15px)", // glass blur effect
          WebkitBackdropFilter: "blur(15px)", // Safari support
          border: "1px solid rgba(255, 255, 255, 0.2)", // glass border
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)", // soft shadow
        }}
      >
        {/* Heading */}
        <h1
          className="text-center fw-semibold"
          style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}
        >
          <span style={{ color: "darkblue" }}>Login</span>
          <span className="text-primary"> ChatApp</span>
        </h1>

        {/* Form */}
        <form>
        {/* Username */}
<div className="mb-3">
  <label className="form-label text-light">
    <span className="form-label fw-bold" style={{ color: "darkblue" }}>
      Username
    </span>
  </label>
  <input
    type="text"
    placeholder="Enter Username"
    className="form-control fw-bold"
    style={{
      height: "2.5rem",
      background: "rgba(255, 255, 255, 0.15)", // glass background
      backdropFilter: "blur(10px)", // glass blur
      WebkitBackdropFilter: "blur(10px)", // Safari support
      color: "black",
      border: "1px solid rgba(255, 255, 255, 0.3)", // glass border
      borderRadius: "6px", // smooth rounded edges
    }}
  />
</div>


          {/* Password */}
<div className="mb-3">
  <label className="form-label text-light fw-bold">
    <span className="form-label" style={{ color: "darkblue" }}>
      Password
    </span>
  </label>
  <input
    type="password"
    placeholder="Enter Password"
    className="form-control fw-bold"
    style={{
      height: "2.5rem",
      background: "rgba(255, 255, 255, 0.15)", // glass background
      backdropFilter: "blur(10px)", // glass blur
      WebkitBackdropFilter: "blur(10px)", // Safari support
      color: "black",
      border: "1px solid rgba(255, 255, 255, 0.3)", // glass border
      borderRadius: "6px", // smooth rounded edges
    }}
  />
</div>

          {/* Don't have an account? */}
          <a
            href="#"
            className="small mt-2 d-inline-block fw-bold"
            style={{
              color: "black",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderBottom = "1px solid red";
              e.target.style.color = "red";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderBottom = "1px solid transparent";
              e.target.style.color = "black";
            }}
          >
            {"Don't"} have an account?
          </a>

          {/* Login Button */}
          <div>
            <button className="btn btn-success w-100 btn-sm mt-2 fw-bold">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



