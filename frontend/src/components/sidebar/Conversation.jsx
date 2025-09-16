import React from "react";

const Conversation = () => {
  return (
    <>
      <div
        className="d-flex gap-2 align-items-center rounded p-2 py-1"
        style={{ cursor: "pointer" }}
      >
        <div className="position-relative ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="45"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 
              11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 
              2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </div>
        <div className="d-flex flex-column flex-fill">
          <div className="d-flex gap-3 justify-content-between">
            <p className="fw-bold text-light mb-0">bhargav m</p>
            <span className="fs-5">**</span>
          </div>
        </div>
      </div>
      <hr className="my-0 py-0" style={{ height: "1px" }} />
    </>
  );
};

export default Conversation;
