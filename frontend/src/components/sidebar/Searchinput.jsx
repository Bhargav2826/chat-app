import React from 'react'
import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
  return (
    <form className="d-flex align-items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="form-control rounded-pill"
      />
      <button
        type="submit"
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "40px", height: "40px" }}
      >
        <FcSearch className='w-6 h-6 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput
