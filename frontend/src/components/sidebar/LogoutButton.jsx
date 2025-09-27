import React from 'react'
import { BiLogOut } from "react-icons/bi"; // import BiLogOut icon
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ?(
         <BiLogOut 
         size={28} 
         className="bg-light rounded-4 cursor-pointer"
         onClick={logout} 
       />
      ) :(
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

      )}
     
    </div> 
  );
};

export default LogoutButton;
