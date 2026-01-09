import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { set } from "mongoose";
import useLogin from "../../hooks/useLogin";


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,login}= useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }
  const customStyles = `
    .glass-card {
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
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
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
      color: black;
    }
    .custom-link {
      color: white;
      text-decoration: none;
      transition: 0.3s ease;
    }
    .custom-link:hover {
      color: #0d6efd;
      text-decoration: underline;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="w-100 p-4 glass-card mx-3" style={{ maxWidth: "400px" }}>
          {/* Heading */}
          <h1
            className="text-center fw-bold mb-4"
            style={{ fontSize: "2rem", textShadow: "2px 2px 5px rgba(0,0,0,0.3)", color: "white" }}
          >
            Login <span className="text-primary text-white">ChatApp</span>
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label fw-bold text-white">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control glass-input"
                autoComplete="new-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-bold text-white">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control glass-input"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Don't have an account? */}
            <Link to="/signup" className="d-inline-block mt-2 small custom-link fw-bold">
              {"Don't"} have an account?
            </Link>

            {/* Login Button */}
            <div className="d-grid mt-3">
              <button className="btn btn-success w-100 btn-sm fw-bold"
                disabled={loading}
              >
               {loading ? <span className="spinner-border spinner-border-sm"></span> : "Login"}

                
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
