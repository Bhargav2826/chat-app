import React, { useState } from 'react'
import { FcSearch } from "react-icons/fc";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const { conversations }=useGetConversations()

  console.log("Conversations in SearchInput:", conversations);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search term must be atleast 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('');
    }else toast.error("No user found !")
  }
  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="form-control rounded-pill"
        onChange={(e) => setSearch(e.target.value)}
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
