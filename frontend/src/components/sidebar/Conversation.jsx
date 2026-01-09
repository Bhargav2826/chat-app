import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
      <div
        className={`d-flex gap-2 align-items-center rounded p-2 py-1
         ${isSelected ? "bg-info" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
        style={{ cursor: "pointer" }}
      >

        <div className="position-relative ">
        <img src={conversation.profilePic} alt="User Profile" className="rounded-circle" style={{ width: "40px", height: "40px" }}/>
          {isOnline && (
            <div
              className="position-absolute rounded-circle bg-success border border-white"
              style={{ width: "10px", height: "10px", bottom: "0", right: "0" }}
            ></div>
          )}
        </div>
        <div className="d-flex flex-column flex-fill">
          <div className="d-flex gap-3 justify-content-between">
            <p className="fw-bold text-light mb-0">{conversation.fullName}</p>
            <span className="fs-5">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="border-top m-0 p-0" style={{ height: "1px" }} />}

      <hr className="my-0 py-0" style={{ height: "1px" }} />
    </>
  );
};

export default Conversation;
