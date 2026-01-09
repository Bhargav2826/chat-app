import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from '../../components/messages/MessageContainer';


const Home = () => {
  return (
    <div
      className="d-flex rounded overflow-hidden bg-light bg-opacity-25"
      style={{ height: "550px", backdropFilter: "blur(10px)" }}
    >
      <Sidebar />
      <MessageContainer/>
    </div>
  );
}

export default Home;
