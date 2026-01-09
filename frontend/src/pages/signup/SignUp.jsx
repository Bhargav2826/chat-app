import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading,signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const customStyles = `
    .min-w-96 {
      min-width: 24rem;
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)

  };

  return (
    <>
      <style>{customStyles}</style>
      <div className="d-flex flex-column align-items-center justify-content-center min-w-96 mx-auto vh-100">
        <div className="p-4 glass-card" style={{ width: "20rem" }}>
          {/* Heading */}
          <h1
            className="fw-bold text-center mb-4"
            style={{
              fontSize: "2rem",
              textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
              color: "white",
            }}
          >
            Sign Up <span className="text-primary text-white">ChatApp</span>
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} autoComplete="off">
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label fw-bold text-white">Full Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control glass-input"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
                autoComplete="off"
              />
            </div>

            {/* Username */}
            <div className="mb-3">
              <label className="form-label fw-bold text-white">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control glass-input"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
                autoComplete="new-username"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-bold text-white">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control glass-input"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                autoComplete="new-password"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label className="form-label fw-bold text-white">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control glass-input"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                autoComplete="off"
              />
            </div>

            {/* Gender Selection */}
            <GenderCheckbox
              selectedGender={inputs.gender}
              onCheckboxChange={handleCheckboxChange}
            />

            {/* Already have account link */}
            <Link to="/login" className="d-inline-block mt-4 small custom-link">
              Already have an account?
            </Link>

            {/* Submit button */}
            <div className="d-grid mt-2">
              <button className="btn btn-success btn-sm w-100" type="submit"
              disabled={loading}
              >
              {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Sign Up"}

              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
