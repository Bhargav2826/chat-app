import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  // Custom styles for Tailwind effects not available in Bootstrap
  const customStyles = `
    .min-w-96 {
      min-width: 24rem;
    }
    .backdrop-effects {
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      background-clip: padding-box;
      background-color: rgba(156, 163, 175, 0) !important;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="d-flex flex-column align-items-center justify-content-center min-w-96 mx-auto">
        <div className="p-4 rounded shadow bg-secondary backdrop-effects" style={{ width: "20rem" }}>
        <h1
  className="fw-bold text-center"
  style={{ fontSize: "2.0rem", textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}
>
  <span style={{ color: "darkblue" }}>Sign Up</span>
  <span className="text-primary"> ChatApp</span>
</h1>
              
              <form>
  <style>
    {`
      .glass-input {
        height: 2.5rem;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        color: black;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 6px;
        transition: all 0.3s ease;
        font-weight: bold;
      }
      .glass-input::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-weight: bold;
      }
      .glass-input:focus {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        color: black;
      }
    `}
  </style>

  <style>
  {`
    .glass-input {
      height: 2.5rem;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: black;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      transition: all 0.3s ease;
      font-weight: bold;
    }
    .glass-input::placeholder {
      color: black;
      font-weight: bold;
    }
    .glass-input:focus {
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
      color: black;
    }
  `}
</style>
<style>
  {`
    .glass-input {
      height: 2.5rem;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: black;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      transition: all 0.3s ease;
      font-weight: bold;
    }
    .glass-input::placeholder {
      color: grey;
      font-weight: bold;
    }
    .glass-input:focus {
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
      color: black;
    }
  `}
</style>

<div className="mb-3">
  <label className="form-label fw-bold" style={{color: '#1e3a8a'}}>Full Name</label>
  <input
    type="text"
    placeholder="Enter Name"
    className="form-control glass-input"
  />
</div>

<div className="mb-3">
  <label className="form-label fw-bold" style={{color: '#1e3a8a'}}>Username</label>
  <input
    type="text"
    placeholder="Enter Username"
    className="form-control glass-input"
  />
</div>

<div className="mb-3">
  <label className="form-label fw-bold" style={{color: '#1e3a8a'}}>Password</label>
  <input
    type="password"
    placeholder="Enter Password"
    className="form-control glass-input"
  />
</div>

<div className="mb-3">
  <label className="form-label fw-bold" style={{color: '#1e3a8a'}}>Confirm Password</label>
  <input
    type="password"
    placeholder="Confirm Password"
    className="form-control glass-input"
  />
</div>

 <GenderCheckbox/>

 <a
  href="#"
  className="d-inline-block mt-4 small custom-link"
>
  Already have an account?
</a>

<div className="d-grid mt-2">
  <button className="btn btn-success btn-sm w-100">
    Sign Up
  </button>
</div>

<style>
  {`
    .custom-link {
      color: white;
      text-decoration: none;
      transition: 0.3s ease;
    }
    .custom-link:hover {
      color: #0d6efd;
      text-decoration: underline;
    }
  `}
</style>
  </form>
          </div>
      </div>
    </>
  );
};

export default SignUp;