import React from 'react'
import SearchInput from './Searchinput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='border-end border-secondary p-3 d-flex flex-column'>
      <SearchInput />
      {/* Divider */}
      <div className="border-top mx-3 my-2"></div>
      <Conversations />
      <LogoutButton/>
    </div>
  );
};

export default Sidebar;


